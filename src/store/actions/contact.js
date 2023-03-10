import {SET_SALES_EMAIL, SET_SALES_PHONE, SET_MARKETING_EMAIL, SET_MARKETING_PHONE  } from "../types";



export const setSalesEmail = (data)  => {
    return {
        type: SET_SALES_EMAIL,
        payload: data,
      }
};

export const setSalesPhone = (data)  => {
    return {
        type: SET_SALES_PHONE,
        payload: data,
      }
};

export const setMarketingEmail = (data)  => {
  return {
      type: SET_MARKETING_EMAIL,
      payload: data,
    }
};

export const setMarketingPhone = (data)  => {
  return {
      type: SET_MARKETING_PHONE,
      payload: data,
    }
};

