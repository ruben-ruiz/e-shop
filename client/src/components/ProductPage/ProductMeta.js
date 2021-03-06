import React from 'react';

const ProductMeta = ({ item }) => {
  const label = item.badge && item.badge.label ? item.badge.label : '';

  return (
    <div className="productMeta">
      {Object.keys(item).length > 0 ?
      <>
        <h2 id="productMeta-badge">{label}</h2>
        <h1 id="productMeta-name">
          {item.productDescription}
        </h1>
        <h2 id="productMeta-code">
          {`Item ${item.productCode}`}
        </h2>
        <h2 className="productMeta-price">
          {item.listPrice.formatted}
        </h2>
        <div className="productMeta-colors">
          {item.colors.map(c =>
              <img key={c.colorCode} src={`https://www.jcrew.com/s7-img-facade/${item.productCode}_${c.colorCode}_sw`}/>
          )}
        </div>
        <button id='addBag'>ADD TO BAG</button>
      </>:
        <></>
      }
    </div>
  )
}

export default ProductMeta;