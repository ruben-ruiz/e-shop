import React from 'react';
import ItemCard from '../Cards/ItemCard';

const Products = ({products}) => {
  // removing duplicate productIds and retaining uniques
  let items = products.filter( (ele, ind) => ind === products.findIndex( elem => elem.productId === ele.productId))

  return (
    <div className="products">
      {items.map(item => <ItemCard key={item.productId} item={item} />)}
    </div>
  );
}

export default Products;