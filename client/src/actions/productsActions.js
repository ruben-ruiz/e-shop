import axios from 'axios';

export const getProducts = (dispatch) => {
  return axios.get('http://localhost:8000/api/products')
    .then(({data}) => {
      dispatch({
          type: 'GET_PRODUCTS',
          payload: data.productList[0].products
        });
      dispatch({
        type: 'SORT_BY',
        payload: data.sortByOrderType
      });
      dispatch({
        type: 'NAVIGATION',
        payload: data.navigation.refinements
      });
      dispatch({
        type: 'SHOP_BY',
        payload: data.shopByList
      })
    })
    .catch(err => console.log(err));
};