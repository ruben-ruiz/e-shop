export const shopBy = (state = [], action) => {
  switch (action.type) {
    case 'SHOP_BY':
      return [
        ...state.concat(action.payload)
      ];
    default:
      return state;
  }
};