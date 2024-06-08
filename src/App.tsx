import { useEffect } from 'react';
import Home from './components/Home';

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
