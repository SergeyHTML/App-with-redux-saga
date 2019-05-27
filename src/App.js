import React from 'react';
import './app.scss';
import ArticlesPage from './components/ArticlesPage'
import Article from './components/Article'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/:id' component={Article} />
          <Route path='/' component={ArticlesPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
