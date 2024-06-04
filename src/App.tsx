import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import EmailMarketer from './components/EmailMarketer';

export default function App() {
  useEffect(() => {
    if ((window as any).Telegram) {
      (window as any).Telegram.WebApp.ready();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/email-marketer" element={<EmailMarketer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
