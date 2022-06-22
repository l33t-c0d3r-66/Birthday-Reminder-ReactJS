import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NewBirthday from './Pages/NewBirthday';
import AllBirthdays from './Pages/AllBirthdays';
import Today from './Pages/Today';
import {useState} from 'react';
function App() {

  const [wishes, setWishes] = useState([]);
  
  function updateWishes(todayWishes) {
    setWishes(todayWishes);
  }

  return (
    <Layout wishes={wishes.length}>
      <Switch>
        <Route exact path='/'>
          <AllBirthdays setWishHandler={updateWishes}/>
        </Route>
        <Route path='/new'>
          <NewBirthday />
        </Route>
        <Route path='/wishes'>
          <Today wishes={wishes}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}
export default App;