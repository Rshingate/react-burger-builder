import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckoutSummary from './containers/CheckOutSummary/CheckoutSummary';
import Orders from './containers/Orders';

function App() {

  return (
    <div className="App">
        <Layout>
          <Route path='/' exact component ={BurgerBuilder} />
          <Route path='/checkout' component ={CheckoutSummary} />
          <Route path='/orders' component ={Orders} />
        </Layout>
    </div>
  );
}

export default App;
