import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { HashRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from '@tonconnect/ui-react';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl='https://ariis11.github.io/aihub/tonconnect-manifest.json'>
    <Router>
      <App />
    </Router>
  </TonConnectUIProvider>,
)
