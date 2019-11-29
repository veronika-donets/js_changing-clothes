const SELECT_ITEM = 'selectItem';
const SET_VALUE = 'setValue';

const initialState = {
  items: [
    'Apron',
    'Belt',
    'Cardigan',
    'Dress',
    'Earrings',
    'Fur coat',
    'Gloves',
    'Hat'
  ],
  selectedItem: -1,
};

const selectItem = (index) => ({ type: SELECT_ITEM, index });
const setValue = (list, editIndex, editValue) => {
  return {
    type: SET_VALUE,
    items: list.map((item, index) => {
      const val = (index === editIndex) ? editValue : item;
      return val.trim();
    }),
    selectedItem: -1,
  }
};
