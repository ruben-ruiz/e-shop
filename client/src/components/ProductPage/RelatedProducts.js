import React from 'react';

const RelatedProducts = ({ styledWith }) => {
  return (
    <div className="relatedProducts">
      {Object.keys(styledWith).length > 0 ?
      <>
        <h1>Shop The Look</h1>
        <div className="relatedProducts-items">
        {styledWith.map(s =>
          <img key={s.productCode} src={`https://www.jcrew.com/s7-img-facade/${s.productCode}_${s.defaultColorCode}`} />
        )}
      </div>
      </> :
      <></>
      }
    </div>
  )
}

export default RelatedProducts;