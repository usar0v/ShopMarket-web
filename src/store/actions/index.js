import axios from "axios";
import {loadingPage, setCategory, setDetailProduct, setMiniCategory, setProduct} from "../productReducer";
import {API_URL} from "../../utils/settings";

export const getCategory = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      dispatch(setCategory(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

export const getProducts = () => {
  return async dispatch => {
    try {
      dispatch(loadingPage())
      const response = await axios.get(`${API_URL}/products`);
      dispatch(setProduct(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

export const getMiniCategory = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/mini_categories`);
      dispatch(setMiniCategory(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

export const getDetailProduct = (id) => {
  return async dispatch => {
    dispatch(loadingPage())
    try {
      const response = await axios.get(`${API_URL}/products/${id}`);
      dispatch(setDetailProduct(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}
