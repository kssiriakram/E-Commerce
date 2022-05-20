
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Store/Home';
import Cart from './components/Cart/Cart';
import Command from './components/Cart/Command';
import {Layout} from './components/Styles/Layout';
import Navigationbar from './components/Navigationbar';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import Connexion from './components/login/Connexion';
import {Information} from './components/Store/Information';

function App() {
  return (
    <React.Fragment>
      <Router>
       <Navigationbar />
      <Layout>
      
          <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/Home/:name" component={Home}/>
          <Route exact path="/Cart" component={Cart}/>
          <Route exact path="/Command" component={Command}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Connexion" component={Connexion}/>
          <Route exact path="/Information/:id" component={Information}/>
  
          

          <Route path="*" component={NoMatch}/>

          </Switch>
          </Layout>  
      </Router>
    
    </React.Fragment>
  );
}

export default App;

