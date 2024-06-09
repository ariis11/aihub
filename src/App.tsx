import { useEffect } from 'react';
import Home from './components/Home';
import { TonConnectButton } from '@tonconnect/ui-react';

export default function App() {
  useEffect(() => {
    if ((window as any).Telegram) {
      (window as any).Telegram.WebApp.ready();
    }
  }, []);

  return (
    <>
      <div className='right-align'>
        <TonConnectButton />
      </div>
      <Home />
    </>
  );
}
