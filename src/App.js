import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Plan from './components/Plan/Plan';
import Service from './components/Service/Service';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Service/>
        <Plan/>
      </main>
    </>
  );
}

export default App;
