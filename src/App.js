import logo from './images/logo.svg';

function App() {
  return (
    <div>
      <div className="absolute bg-[url('images/skyline.jpeg')] h-screen w-screen">
        <div className="bg-white h-screen w-screen opacity-80"></div>
      </div>
      <div className="relative h-screen flex place-content-center leading-[100vh]">
        <img src={logo} className="w-1/2" title="Bristle" />
      </div>
    </div>
  );
}

export default App;
