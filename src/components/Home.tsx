import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <button>
        <Link to="/email-marketer">Go to Email Marketer</Link>
      </button>
    </div>
  );
};