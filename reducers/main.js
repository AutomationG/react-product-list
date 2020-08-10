import React from 'react'; 
import {BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from '../pages/app';
import configureStore from './store';

const store = configureStore();
let route = (
 <Provider store={store}>
 <Router>
   <Switch>
     <Route exact path="/" component={App}></Route>
   </Switch>
 </Router>
 </Provider>
)

export default route;