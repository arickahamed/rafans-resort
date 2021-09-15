import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/book/:bedType">
              <Book />
            </Route>
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
  );
}

export default App;
