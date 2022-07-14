import React, {useState} from 'react';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import DesktopHeader from './sections/header/DesktopHeader';
import Footer from './sections/footer/Footer';
import MobileHeader from './sections/header/MobileHeader';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(param => param !== true);
  }
  return (
    <section className='dark'>
      <DesktopHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <MobileHeader />
      <Hero isDarkMode={isDarkMode} />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
