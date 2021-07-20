import React from 'react';
import { useParams } from 'react-router-dom';
import ProductView from './ProductView';
import ProductMeta from './ProductMeta';
import RelatedProducts from './RelatedProducts';

const Overview = ({ products }) => {
  const { productCode } = useParams();
  let item = {};
  let styledWith = [];

  for (let p of products) {
    if (p.productCode === productCode) {
      item = p;
      break;
    }
  }

  if (item.hasOwnProperty('styledWithSkus')) {
    let styles = (item.styledWithSkus).split(',');
    for (let s of styles) {
      let temp = s.split('_');
      if (temp[0] !== item.productCode) {
        styledWith.push({
          productCode: temp[0],
          defaultColorCode: temp[1]
        })
      }
    }
  }

  return (
    <div className="overview">
      <ProductView item={item} styledWith={styledWith} />
      <ProductMeta item={item} />
      <RelatedProducts styledWith={styledWith} />
    </div>
  )
}

export default Overview;