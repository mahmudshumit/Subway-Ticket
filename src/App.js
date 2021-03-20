import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

import LogIn from './Components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TicketDetail from './Components/TicketDetail/TicketDetail';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>Name : {loggedInUser.name}</h3>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/ticket/:ticketId">

            <TicketDetail></TicketDetail>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>

          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}


export default App;
