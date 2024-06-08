import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/email-marketer">Email Marketer</Link>
            <Link to="/crypto-news">WEB3</Link>
            <Link to="/technical-analysis">Analyzer</Link>
        </div>
    )
}