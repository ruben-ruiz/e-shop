export const products = (state = [], action) => {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return [
          ...state.concat(action.payload)
        ];
      default:
        return state;
    }
};