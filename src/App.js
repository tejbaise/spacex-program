import React from 'react';
import ProgramDetails from './Components/ProgramDetails/ProgramDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='*'>
          <div className='App'>
            <ProgramDetails />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
