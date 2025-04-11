import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://echoguest-backend.onrender.com/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(data.message || 'No message'))
      .catch((err) => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div className="App">
      <h1>Backend Connection Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
