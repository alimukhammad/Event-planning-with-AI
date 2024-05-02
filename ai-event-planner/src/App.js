import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to Avents</h1>
        <p>I am your event planner React.</p>
        
      </header>
    </div>
  );
}

export default App;
