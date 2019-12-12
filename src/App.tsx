import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from '@/router';
import NotFound from '@/views/NotFound';

const customHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        {routes.map((v, i) => (
          <Route
            exact
            strict
            key={i}
            path={v.path}
            component={v.component}
          ></Route>
        ))}
        <Route exact strict path='/'>
          <Redirect to='/home'></Redirect>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
