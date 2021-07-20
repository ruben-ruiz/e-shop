import React from 'react';

const Products = ({products}) => {
  // removing duplicate productIds and retaining uniques
  let items = products.filter( (ele, ind) => ind === products.findIndex( elem => elem.productId === ele.productId))

  return (
    <div className="products">
      {items.map(item => <div key={item.productId}>{item.productId}</div>)}
    </div>
  );
}

export default Products;