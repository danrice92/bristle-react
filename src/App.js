import logo from './images/logo.svg';
import HeroIcons from './icons/hero-icons';

function App() {
  return (
    <div>
      <div className="absolute bg-[url('images/skyline.jpeg')] h-screen w-screen">
        <div className="bg-white h-screen w-screen opacity-80"></div>
      </div>
      <div className="relative h-screen flex flex-col place-content-center items-center">
        <p>Launch your career with</p>
        <img src={logo} className="w-1/2 pt-4 pb-4" title="Bristle" />
        <HeroIcons.ChevronDoubleDown />
      </div>
    </div>
  );
}

export default App;
