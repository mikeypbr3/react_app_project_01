import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <header>
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
      </header>

      <main>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/upload" component={Upload} />
          <Route path="/filter" component={Filter} />
          <Redirect to="/dashboard" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
