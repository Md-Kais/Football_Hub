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
      <Router>
        <Switch>
          <LeagueIDContext.Provider value={LeagueIdData}>
            <Route path="/home">
              
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </LeagueIDContext.Provider>
          
          <Route path="/leagueDetailed/:id">
            <LeagueDetailed />
          </Route>

       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
