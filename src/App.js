import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';

function App() {
  return (
   <Router>
      <Header></Header>
    
      <Switch>
      
        
        <Route path="/home">
          
        <Home></Home>
        </Route>
       
        <Route path="/destination">
          
          <Destination></Destination>
          </Route>

      </Switch>


    </Router>

  );
}


export default App;
