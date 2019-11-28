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

const store = Redux.createStore(reducer, initialState);

render = (state, dispatch) => {
  const clothesList = document.getElementById('clothesList');
  clothesList.innerHTML = ``;

  const currentList = store.getState().items;
  const index = store.getState().index;

  for (let i = 0; i < currentList.length; i++) {
    const item = document.createElement('div');
    item.innerHTML = `
      <div class="content">
        <div class="ui fluid icon input">
          <input type="text" placeholder="Write an item">
        </div>
      
        <div class="header">
          ${currentList[i]}
          <div class="right floated content">
            <button class="ui button">Edit</button>
          </div>
        </div>
      </div>
    `;

    item.className = "item";
    clothesList.append(item);

    const input = document.getElementsByClassName('input');
    const clothes = document.getElementsByClassName('header');
    const button = document.getElementsByClassName('button');

    input[i].addEventListener('keypress', event => {
      if (event.code === "Enter") {
        store.dispatch(setValue(state.items, state.selectedItem, event.target.value))
      }
    });

    button[i].addEventListener('click', () => dispatch({
      type: SELECT_ITEM,
      index: i,
    }));

     if (i === state.selectedItem) {
       clothes[i].style.display = 'none';
       input[i].style.display = 'block';
    } else {
       clothes[i].style.display = 'block';
       input[i].style.display = 'none';
    }
  }
};

render(store.getState(), store.dispatch);
store.subscribe(() => render(store.getState(), store.dispatch));
