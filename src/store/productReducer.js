const defaultState = {
  category: [],
  mini_category: [],
  products: [],
  detail_product: {},
  loading: false,
}


const GET_CATEGORY = "GET_CATEGORY"
const GET_MINI_CATEGORY = "GET_MINI_CATEGORY"
const GET_PRODUCT = "GET_PRODUCT"
const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT"
const LOADING = 'LOADING'


export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case GET_MINI_CATEGORY:
      return {
        ...state,
        mini_category: action.payload
      }
    case LOADING: return { ...state, loading: true };
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detail_product: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export const setCategory = (res) => ({type: GET_CATEGORY, payload: res})
export const setMiniCategory = (res) => ({type: GET_MINI_CATEGORY, payload: res})
export const setProduct = (res) => ({type: GET_PRODUCT, payload: res})
export const loadingPage = () => ({type: LOADING})
export const setDetailProduct = (res) => ({type: GET_DETAIL_PRODUCT, payload: res})
