import React from 'react';

const ProductView = ({ item }) => {
  return (
    <div className="productView">
      <div className="productView-main">
        <img src={`https://www.jcrew.com/s7-img-facade/${item.productCode}_${item.defaultColorCode}`} />
      </div>
    </div>
  )
}

export default ProductView;