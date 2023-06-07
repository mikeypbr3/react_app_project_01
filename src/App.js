import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
import Filter from './components/Filter';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/filter">Filter</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/upload">
          <Upload />
        </Route>
        <Route exact path="/filter">
          <Filter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
