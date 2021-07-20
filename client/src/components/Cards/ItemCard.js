import React from 'react';
import { useHistory } from 'react-router-dom';

const ItemCard = ({item}) => {
  const history = useHistory();
  return (
    // <div className="card" onClick={() =>
    //   history.push({
    //     pathname: item.url,
    //     state: {item}
    //   })}>
    <div className="card" onClick={() => history.push(item.url)}>
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