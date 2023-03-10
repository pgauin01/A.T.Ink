import { SET_SALES_EMAIL, SET_SALES_PHONE, SET_MARKETING_EMAIL, SET_MARKETING_PHONE } from "../types";
import {sales , marketing} from "../../components/data"

const initialState = {
  salesEmail: sales.email,
  salesPhone: sales.phone,
  marketingEmail: marketing.email,
  marketingPhone: marketing.phone,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SALES_PHONE:
      return {
        ...state,
        salesPhone: action.payload,
      };
    case SET_SALES_EMAIL:
      return {
        ...state,
        salesEmail: action.payload,
      };
    case SET_MARKETING_EMAIL:
       return {
          ...state,
          marketingEmail: action.payload,
      }; 
    case SET_MARKETING_PHONE:
        return {
          ...state,
          marketingPhone: action.payload,
      };
    default:
      return state;   
  }
};

export default reducer;