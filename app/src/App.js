import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import WelcomeCard from './components/WelcomeCard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import PeoplePage from './components/people/PeoplePage';
import SettingsPage from './components/settings/SettingsPage';

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={WelcomeCard}/>
          <Route path="/welcome" exact component={WelcomeCard}/>
          <Route path="/login" exact component={WelcomeCard}/>
          <Route path="/people" exact component={PeoplePage}/>
          <Route path="/settings" exact component={SettingsPage}/>
          <Route component={ErrorComponent}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
