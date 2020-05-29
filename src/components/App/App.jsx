// React imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ToastsContainer, ToastsStore } from 'react-toasts';

// Own imports
import './App.css';
import Home from '../Home';
import Gameroom from '../Gameroom';
import ErrorBoundary from '../ErrorBoundary';
import NotFoundPage from '../NotFoundPage';
import Navbar from '../Navbar';
import Footer from '../Footer';

const App = () => {

  return (
    <React.Fragment>
      <ErrorBoundary>
          <Router>
            <Navbar />
            <main>
              <ToastsContainer store={ToastsStore} />
              <Switch>
                <Route path="/game" component={Gameroom} />
                <Route exact path="/" component={Home} />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
            <Footer />
          </Router>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
