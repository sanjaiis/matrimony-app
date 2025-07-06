import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MatrimonyApp from './components/initialpage';
import TestimonialsSection from './components/testimonial';
import './index.css';
import NotFound from './notFound';
import ProfileList from './components/profilelist';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Auth from './Authentication/Auth.jsx';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);

      // ✅ redirect to /home if on root or unknown path
      if (session && (location.pathname === '/' || location.pathname === '')) {
        navigate('/home', { replace: true });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);

      if (session && (location.pathname === '/' || location.pathname === '')) {
        navigate('/home', { replace: true });
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {session ? (
        <Routes>
          <Route path="/home" element={<MatrimonyApp />} />
          <Route path="/about" element={<TestimonialsSection />} />
          <Route path="/profiles" element={<ProfileList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Auth />
      )}
    </>
  );
}
