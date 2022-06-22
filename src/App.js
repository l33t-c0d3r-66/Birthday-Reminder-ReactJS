import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NewBirthday from './Pages/NewBirthday';
import Birthdays from './Pages/Birthdays';
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Birthdays />
        </Route>
        <Route path='/new'>
          <NewBirthday />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;