import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Appartments from './components/Home/Appartments/Appartments';
import Features from './components/Home/Features/Features';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route  path="/home">
          <Home></Home>
          </Route>
          
          <Route  path="/appartments">
          <Appartments></Appartments>
          </Route>

          <Route  path="/features">
          <Features></Features>
          </Route>

          <Route  path="/about">
          <About></About>
          </Route>

          <Route  path="/login">
          <Login></Login>
          </Route>

          <Route exact path="*">
          <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
