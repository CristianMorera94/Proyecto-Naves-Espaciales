import axios from "axios";

export const GET_SHIPS="GET_SHIPS";
export const GET_SHIP_ID = "GET_SHIP_ID";

export function getShips(){
  return async function (dispatch) {
    try {
      const  {data}  = await axios.get("http://localhost:3001/ships");
      return dispatch({
        type: GET_SHIPS,
        payload: data
      })
    } catch (err) {
        console.log(err.message,err.response.data);
    }
  };
};

export const getShipId = (id) => {
  return async function(dispatch){
    try{
      const {data}= await axios.get(`http://localhost:3001/ships/${id}`);
      console.log(data);
      return dispatch({
        type: GET_SHIP_ID,
        payload:data
      })
    }catch(err){
      console.log(err.message);
    }
  }
}
