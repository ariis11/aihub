import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import EmailMarketer from './components/EmailMarketer';
import Navbar from './components/NavBar';
import CryptoNews from './components/CryptoNews';
import TechnicalAnalysis from './components/TechnicalAnalysis';

export default function App() {
  useEffect(() => {
    if ((window as any).Telegram) {
      (window as any).Telegram.WebApp.ready();
    }
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
