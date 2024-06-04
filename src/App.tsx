import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import EmailMarketer from './components/EmailMarketer';
import Navbar from './components/NavBar';

export default function App() {
  useEffect(() => {
    if ((window as any).Telegram) {
      (window as any).Telegram.WebApp.ready();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email-marketer" element={<EmailMarketer />} />
      </Routes>
    </>
  );
}
