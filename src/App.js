import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
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

  // ✅ First, get the session safely
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (isMounted) {
        setSession(data?.session ?? null);
        setLoading(false);
      }
    };

    init();

    // ✅ Auth state listener (do NOT navigate here!)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        setSession(session);
      }
    });

    return () => {
      isMounted = false;
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // ✅ Redirect logic: safely in useEffect based on session & path
  useEffect(() => {
    if (session && (location.pathname === '/' || location.pathname === '')) {
      navigate('/home', { replace: true });
    }
  }, [session, location.pathname, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {session ? (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
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
