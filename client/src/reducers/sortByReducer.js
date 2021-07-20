export const sortBy = (state = [], action) => {
  switch (action.type) {
    case 'SORT_BY':
      return [
        ...state.concat(action.payload)
      ];
    default:
      return state;
  }
};