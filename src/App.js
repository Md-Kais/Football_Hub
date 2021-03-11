import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './COMPONENT/Home/Home.js'
import LeagueDetailed from './COMPONENT/LeagueDetailed/LeagueDetailed.js'
export const LeagueIDContext = createContext();
function App() {
  let [LeagueIdData, setLeagueIdData] = useState();
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeagueIdData(data.leagues))


  }, []);
  return (
    <div>
      <LeagueIDContext.Provider value={LeagueIdData}>
        <Router>
          <Switch>

            <Route path="/home">

              <Home />
            </Route>
            <Route path="/leagueDetailed/:idLeague">
              <LeagueDetailed />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <h1>No</h1>
            </Route>





          </Switch>
        </Router>
      </LeagueIDContext.Provider>
    </div>
  );
}

export default App;
