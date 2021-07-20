import React from 'react';
import { useParams } from 'react-router-dom';

const Overview = ({ products }) => {
  const { productCode } = useParams();
  let item = {};

  for (let p of products) {
    if (p.productCode === productCode) {
      item = p;
      break;
    }
  }

  return (
    <div className="overview">
      {item.productCode}
    </div>
  )
}

export default Overview;