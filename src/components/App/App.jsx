// React imports
import React from 'react';

// Own imports
import './App.css';
import Home from '../Home';
import Gameroom from '../Gameroom';
import ErrorBoundary from '../ErrorBoundary';
import NotFoundPage from '../NotFoundPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <ErrorBoundary>
          <Router>
            <Switch>
              <Route path="/game" component={Gameroom} />
              <Route exact path="/" component={Home} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
