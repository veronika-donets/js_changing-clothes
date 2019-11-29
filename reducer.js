function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.index,
      };
    case SET_VALUE:
      return {
        ...state,
        items: action.items,
        selectedItem: action.selectedItem,
      };

    default:
      return state;
  }
}
