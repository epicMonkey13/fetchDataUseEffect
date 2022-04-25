import './App.css';
import { useState, useEffect } from 'react';

function GitHubUser({login}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);

  if (data) {
    return (
    <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} width={100} alt="visual representation of someone's personality or a random choice"/>
      <h2>{data.location}</h2>
    </div>
    );
  }
  return null;
}

function App() {
  return (
    <GitHubUser login="moonhighway"/>
  );

}

export default App;
