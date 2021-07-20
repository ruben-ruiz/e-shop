import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsActions';
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
    <>
    {products.map(product => {
      return (
        <div>
          {product.productId}
        </div>
      )
    })}
    </>
  )
}

export default App;