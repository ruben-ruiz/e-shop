import { combineReducers } from 'redux';
import { products } from './productsReducer';
import { shopBy } from './shopByReducer';
import { navigation } from './navigationReducer';
import { sortBy } from './sortByReducer';

export default combineReducers({
    products,
    shopBy,
    navigation,
    sortBy
});