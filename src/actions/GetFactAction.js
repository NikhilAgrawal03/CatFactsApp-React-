import {
  FACT_FAIL,
  FACT_REQUEST,
  FACT_SUCCESS,
} from "../constants/FactConstant";
import axios from "axios";

export const getFact = (animal, numfacts) => async (dispatch, getState) => {
  try {
    dispatch({ type: FACT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=${numfacts}`,
      config
    );

    dispatch({
      type: FACT_SUCCESS,
      payload: data,
    });

    localStorage.setItem("factData", JSON.stringify(getState().factData.factData));
  } catch (error) {
    dispatch({
      type: FACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
