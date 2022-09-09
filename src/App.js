import React from 'react'
import {Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} /></Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
