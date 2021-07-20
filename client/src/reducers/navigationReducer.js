export const navigation = (state = [], action) => {
  switch (action.type) {
    case 'NAVIGATION':
      return [
        ...state.concat(action.payload)
      ];
    default:
      return state;
  }
};