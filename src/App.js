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

  useEffect(() => {
    let isMounted = true;

    // Initial session fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (isMounted) {
        setSession(session);
        setLoading(false);
      }
    });

    // Auth state listener
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) setSession(session);
    });

    return () => {
      isMounted = false;
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Only run redirect after session is set
    if (session && (location.pathname === '/' || location.pathname === '')) {
      navigate('/home', { replace: true });
    }
  }, [session, location.pathname, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {session ? (
        <Routes>
          {/* Optional: Add this to always redirect "/" to "/home" */}
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
