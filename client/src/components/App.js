import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div>hi</div>
  )
}

export default App;