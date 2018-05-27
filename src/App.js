import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from './component/Login'
import Dashboard from './component/Dashboard';
import LinkList from './component/links/LinkList';
import CreateLinks from './component/links/CreateLinks';
import EditLinks from './component/links/EditLinks';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter> 
          <Switch> 
              <Route path= "/login" component={Login}/>
              <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
              <Route path= "/dashboard" component={Dashboard}/>
              <Route exact path="/links" component={LinkList}/>
              <Route path="/CreateLinks" component={CreateLinks}/>
              <Route path="/links/:id/edit" component={EditLinks} /> 
           </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>

    );
  }
}

export default App;

