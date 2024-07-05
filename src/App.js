import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  console.log(`${process.env.REACT_APP_BACK_END_URL}test`)
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACK_END_URL}`+"test", {
        method : "POST",
      });
      const datas = await response.json();
      return datas;
    }

    getDatas().then(console.log).catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
