import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App.js';
import Home from './pages/Home.js';
import NavBar from './components/NavBar.js';
import table from './pages/table.js'
import virtualizedtable from './pages/virtualizedtable.js'
import PowerBI from './pages/powerbi.js'
import test from './components/FetchData.js'
import DataChart from './components/DataChart.js'
import D3Fatalities from './components/D3Fatalities.js'
import Chart from './components/Chart.js'
import WorldMap from './components/WorldMap.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/table/:dataset" exact cVomponent={table} />
        <Route path="/powerbi" exact component={PowerBI} />
        <Route path="/metadata" exact component={test} />
        <Route path="/vtable/:dataset" exact component={virtualizedtable} />
        <Route path="/datachart" exact component={DataChart} />
        <Route path="/d3" exact component={D3Fatalities} />
        <Route path="/chart" exact component={Chart} />
        <Route path="/map" exact component={WorldMap} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
