/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GRABBING_INFO = 'GABBING_INFO';
export const GRABBING_INFO_SUCC = 'GABBING_INFO_SUCC';
export const GRABBING_INFO_FAIL = 'GABBING_INFO_FAIL';



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getInfo = ( ) => {
return dispatch =>{

  dispatch({type:GRABBING_INFO});
  axios 
  .get("http://localhost:3333/smurfs")
  .then((response) => {
    dispatch({
      type:GRABBING_INFO_SUCC,
      payload:response.data
    });
    console.log(response,'res');
    
  })
  .catch(err =>{
    dispatch({
    type:GRABBING_INFO_FAIL,
    payload:err
  })
})
}

}
console.log(getInfo())

