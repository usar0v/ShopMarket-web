const defaultState = {
  count: 1,
  bascket: JSON.parse(localStorage.getItem('bascket')) || [],
}


const ADD_COUNT = "ADD_COUNT";
const GET_COUNT = "GET_COUNT";
const ADD_BASCKET = "ADD_BASCKET";

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case GET_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case ADD_BASCKET:
      if (state.bascket.find(v => v.id === action.payload.id)){
        return {...state, bascket: state.bascket.filter(v => v.id !== action.payload.id)}
      }else {
        return {
          bascket: [...state.bascket, action.payload]
        }
      }
    default:
      return state
  }
}

export const addCount = (res) => ({type: ADD_COUNT, payload: res})
export const addBascket = (res) => ({type: ADD_BASCKET, payload: res})