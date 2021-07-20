import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import Overview from './ProductPage/Overview';
import Results from './ProductSearch/Results';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const sortBy = useSelector(state => state.sortBy);
  const navigation = useSelector(state => state.navigation);
  const shopBy = useSelector(state => state.shopBy);

  useEffect(() => {
    getProducts(dispatch);
  }, [])

  return (
    <HashRouter>
      <Switch>
        <Route
          path="/p/womens_category/sweaters/pullover/:description/:code"
          component={Overview}
        />
        <Route
          path="/p/womens_category/sweaters/pullover"
          component={Results}
        />
        <Route exact path="/">
          <Redirect to="/p/womens_category/sweaters/pullover"/>
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  )
}

export default App;