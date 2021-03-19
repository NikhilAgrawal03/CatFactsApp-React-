import {
     FACT_FAIL,
     FACT_REQUEST,
     FACT_SUCCESS
   } from "../constants/FactConstant";
   


   export const FactReducer = (state = {}, action) => {
     switch (action.type) {
       case FACT_REQUEST:
         return { loading: true };
       case FACT_SUCCESS:
         return { loading: false, factData: action.payload };
       case FACT_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };