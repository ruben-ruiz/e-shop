import React from 'react';
import Products from './Products';
import SearchCriteria from './SearchCriteria';

const Results = ({products, navigation, sortBy, shopBy}) => (
  <div className="results">
    <SearchCriteria navigation={navigation} sortBy={sortBy} shopBy={shopBy} />
    <Products products={products}/>
  </div>
)

export default Results;