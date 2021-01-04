import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import WelcomeCard from './components/WelcomeCard';

function App() {
  return (
    <div className="container">
      <Header/>
      <WelcomeCard/>
      <Footer/>
    </div>
  );
}

export default App;
