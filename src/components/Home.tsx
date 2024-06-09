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
                <Link className='link-reset' to="/email-marketer"><button className="btn" key="/email-marketer" onClick={() => handleRouteSelection("/email-marketer")}>Email Marketer</button></Link>
              </div>
              <div className="item">
                <img src="web3.png" className="img" />
                <Link className='link-reset' to="/crypto-news"><button className="btn" key="/crypto-news" onClick={() => handleRouteSelection("/crypto-news")}>WEB3</button></Link>
              </div>
              <div className="item">
                <img src="dataan.png" className="img" />
                <Link className='link-reset' to="/technical-analysis"><button className="btn" key="/technical-analysis" onClick={() => handleRouteSelection("/technical-analysis")}>Chart Analyzer</button></Link>
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