import './App.scss';
import logo from './images/logo.svg';

function App() {
  return (
    <div id="app">
      <div className="skyline-background">
        <div className="container">
          <img src={logo} className="img-fluid" title="Bristle" />
        </div>
      </div>
    </div>
  );
}

export default App;
