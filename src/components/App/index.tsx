import logo from '../../assets/logo.svg';
import './App.css';
import Layout from './Layout';
import Weather from '../../pages/Weather';
// eslint-disable-next-line
const App = () => {
  return (
    <div className="App">
      <Layout>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <Weather />
      </Layout>
    </div>
  );
};

export default App;
