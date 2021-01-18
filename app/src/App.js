import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import WelcomeCard from './components/WelcomeCard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import PeoplePage from './components/people/PeoplePage';
import UserProfile from "./components/user/UserProfile";
import UserSettings from "./components/user/UserSettings";
import UserNotifications from "./components/user/UserNotifications";
import EnrollPage from "./components/EnrollPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={WelcomeCard}/>
          <Route path="/welcome" exact component={WelcomeCard}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/registration/enroll" exact component={EnrollPage}/>
          <Route path="/login" exact component={WelcomeCard}/>
          <Route path="/people" exact component={PeoplePage}/>
          <Route path="/user/profile" exact component={UserProfile}/>
          <Route path="/user/notifications" exact component={UserNotifications}/>
          <Route path="/user/settings" exact component={UserSettings}/>
          <Route component={ErrorComponent}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
