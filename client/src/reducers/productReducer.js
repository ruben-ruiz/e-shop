export const product = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          productId: action.productId,
          productDescription: action.productDescription,
          brand: action.brand,
          videoOnArray: action.videoOnArray,
          showOnfigImage: action.showOnfigImage,
          priority: action.priority,
          listPrice: action.listPrice,
          url: action.url,
          productCode: action.productCode,
          titles: action.titles,
          folderId: action.folderId,
          defaultColorCode: action.defaultColorCode,
          enabledBadges: action.enabledBadges,
          shotType: action.shotType,
          colors: action.colors,
          apiLink: action.apiLink,
          extendedSizeGroupId: action.extendedSizeGroupId,
          extendedSize: action.extendedSize,
          showAllColors: action.showAllColors,
          styledWithSkus: action.styledWithSkus,
          discountPercentage: action.discountPercentage,
          was: action.was,
          now: action.now
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
  
        return {
          ...state,
          completed: !state.completed
        };
      default:
        return state;
    }
};