import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-move" alt="logo" />
        <img src={logo} className="App-logo App-logo-move-2" alt="logo" />
        <img src={logo} className="App-logo App-logo-move-3" alt="logo" />
        <img src={logo} className="App-logo App-logo-pos App-logo-spin" alt="logo" />
      </header>
    </div>
  );
}

export default App;
