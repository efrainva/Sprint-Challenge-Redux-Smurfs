import {
  GRABBING_INFO,
  GRABBING_INFO_SUCC,
  GRABBING_INFO_FAIL
  } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs:[],
  fetchingSmurfs: false,
  error:null
}



/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducers = (state = initialState, action) => {
  switch (action.type){
    case GRABBING_INFO:
      return {...state,fetchingSmurfs:true};

    case GRABBING_INFO_SUCC:
      console.log(action.payload,'re');
      return{...state
        // smurfs:[state.smurfs,...action.payload],
        // fetchingSmurfs:false
        }

    case GRABBING_INFO_FAIL:
      return{...state,error:action.payload}
    default:
    return state;
  }
}


export default reducers;