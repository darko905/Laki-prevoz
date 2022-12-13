import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
        <Contact/>
      </main>
    </>
  );
}

export default App;
