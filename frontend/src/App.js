import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
