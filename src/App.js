import './App.css';
import logo from '../src/img/freeCodeCampLogo.png';
import Button from '../src/components/Button';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='main-logo'
          src={logo}
          alt='freeCodeCampLogo'
        />
      </div>
      <div className='calculator-container'>
        <div className='file'>
          <Button>1</Button>
        </div>
        <div className='file'></div>
        <div className='file'></div>
        <div className='file'></div>
        <div className='file'></div>
      </div>
    </div>
  );
}

export default App;
