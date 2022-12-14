import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Plan from './components/Plan/Plan';
import Pricelist from './components/Pricelist/Pricelist';
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
        <Pricelist/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
