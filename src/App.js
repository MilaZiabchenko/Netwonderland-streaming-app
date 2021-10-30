import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shows from './pages/Shows';
import ShowsItemDetails from './components/ShowsItemDetails';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      {/* <AuthProvider> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shows">
              <Shows />
            </Route>
            <Route path="/shows/:id">
              <ShowsItemDetails />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
          <Footer />
        </Router>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
