import { Link } from "react-router-dom"

export default function Navbar(handleRouteSelection: any) {
    return (
        <div className="div-center">
            <h1 className="navigation-header">CHOOSE REQUIRED SERVICE</h1>
            <div className="container-navigation">
                <div className="inner">
                    <div className="item">
                        <img src="imgen.webp" className="img" />
                        <button className="btn" key="/email-marketer" onClick={() => handleRouteSelection("/email-marketer")}><Link to="/email-marketer">Email Marketer</Link></button>
                    </div>
                    <div className="item">
                        <img src="imgen.webp" className="img" />
                        <button className="btn" key="/crypto-news" onClick={() => handleRouteSelection("/crypto-news")}><Link to="/crypto-news">WEB3</Link></button>
                    </div>
                    <div className="item">
                        <img src="imgen.webp" className="img" />
                        <button className="btn" key="/technical-analysis" onClick={() => handleRouteSelection("/technical-analysis")}><Link to="/technical-analysis">Chart Analyzer</Link></button>
                    </div>
                    {/* <div className="item">
                        <img src="imgen.webp" className="img" />
                        <button className="btn" id="btnImageGeneration">IMAGE GENERATION</button>
                    </div>
                    <div className="item">
                        <img src="iman.webp" className="img" />
                        <button className="btn" id="btnImageAnalysis">IMAGE ANALYSIS</button>
                    </div>

                    <div className="item">
                        <img src="tta.webp" className="img" />
                        <button className="btn" id="btnTextToAudio">TEXT TO AUDIO
                        </button>
                    </div>
                    <div className="item">
                        <img src="att.webp" className="img" />
                        <button className="btn" id="btnAudioToText">AUDIO TO TEXT
                        </button>
                    </div>

                    <div className="item">
                        <img src="imtotext.webp" className="img" />
                        <button className="btn" id="btnExtractText" >EXTRACT TEXT FROM IMAGE  </button>
                    </div>

                    <div className="item">
                        <img src="bgremove.webp" className="img" />
                        <button className="btn" id="btnRemoveBackg" >REMOVE IMAGE BACKGROUND</button>
                    </div>

                    <div className="item">
                        <img src="suno.webp" className="img" />
                        <button className="btn" id="btnSong" >CREATE A SONG</button>
                    </div>

                    <div className="item">
                        <img src="locationf.webp" className="img" />
                        <button className="btn" id="btnLocation" >FIND LOCATION FROM PICTURE</button>
                    </div> */}

                </div>
            </div>
        </div>
    );
}