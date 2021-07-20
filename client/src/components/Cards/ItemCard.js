import React from 'react';

const ItemCard = ({item}) => {
  return (
    <div className="card">
      <div className="card-display">
        <img src={`https://www.jcrew.com/s7-img-facade/${item.productCode}_${item.defaultColorCode}`} />
      </div>
      <div className="card-body">
        <p>{item.productDescription}</p>
        {item.was ?
          <span><p>{item.was.formatted}</p><p>{item.now.formatted}</p></span>
          :
          <p>{item.listPrice.formatted}</p>
        }
      </div>
    </div>
  )
}

export default ItemCard;