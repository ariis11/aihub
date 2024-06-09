import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import EmailMarketer from './EmailMarketer';
import CryptoNews from './CryptoNews';
import TechnicalAnalysis from './TechnicalAnalysis';

export default function Home() {
  const [selectedRoute, setSelectedRoute] = useState<string>("");

  // Function to handle route selection
  const handleRouteSelection = (route: string) => {
    setSelectedRoute(route);
  };

  const routes = [
    { path: "/home", name: "Home", component: <Home /> },
    { path: "/email-marketer", name: "Email Marketer", component: <EmailMarketer /> },
    { path: "/crypto-news", name: "Crypto News", component: <CryptoNews /> },
    { path: "/technical-analysis", name: "Technical Analysis", component: <TechnicalAnalysis /> }
  ];

  return (
    <>
      {!selectedRoute ? (
        <div className="div-center">
          <h1 className="navigation-header">CHOOSE HELPER</h1>
          <div className="container-navigation">
            <div className="inner">
              <div className="item">
                <img src="emailh.png" className="img" />
                <button className="btn" key="/email-marketer" onClick={() => handleRouteSelection("/email-marketer")}><Link className='link-reset' to="/email-marketer">Email Marketer</Link></button>
              </div>
              <div className="item">
                <img src="web3.png" className="img" />
                <button className="btn" key="/crypto-news" onClick={() => handleRouteSelection("/crypto-news")}><Link className='link-reset' to="/crypto-news">WEB3</Link></button>
              </div>
              <div className="item">
                <img src="dataan.png" className="img" />
                <button className="btn" key="/technical-analysis" onClick={() => handleRouteSelection("/technical-analysis")}><Link className='link-reset' to="/technical-analysis">Chart Analyzer</Link></button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Routes>
        </div>
      )}
    </>
  );
};