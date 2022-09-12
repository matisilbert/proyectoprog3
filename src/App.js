import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Favoritos from './screens/Favorites/Favorites';
import './App.css'


function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favoritos" component={Favoritos} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
