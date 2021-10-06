import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import Welcome from './components/Welcome/Welcome';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <p> {loggedInUser.name}</p>
      <Router>
        <Header />
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
