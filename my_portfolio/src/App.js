import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopscrollButton from './components/TopscrollButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';


function App() {
  useEffect(()=>
  {
      AOS.init(
        {
        duration:2000,
        delay:10,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',  
        once: true
        }
        );
  },[])
  return (
    
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <TopscrollButton/>
    </div>
    
  );
}

export default App;
