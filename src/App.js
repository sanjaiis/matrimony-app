// App.js ✅
import { Routes, Route } from 'react-router-dom';
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
  console.log(session, "session")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session:", session);
      setSession(session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {session ? (
        <Routes>
          <Route path="/" element={<MatrimonyApp />} />
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
