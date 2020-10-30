import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
} from "../constant/productConstant";
import Axios from "axios";

export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const result = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products`
    );

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const result = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`
    );

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
