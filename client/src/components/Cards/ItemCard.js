import React from 'react';

const ItemCard = ({item}) => {
  return (
    <div className="card">
      <div className="card-display">
        <img src={`https://www.jcrew.com/s7-img-facade/${item.productCode}_${item.defaultColorCode}`} />
      </div>
      <div className="card-details">
        nice
      </div>
    </div>
  )
}

export default ItemCard;