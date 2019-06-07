import React from 'react'
import { connect } from 'tls';
import Smurf from './smurf';
const Allsmurfs = ( ) => {
  return (
    <div>
      {props.smurf.map(i =>{ 
        return <Smurf smurf = />
       })}
    </div>
  )
}
const mapStateToProps =(state) => {
  return {
    smurfs:state.smurfs
  }
}
export default connect( mapStateToProps,
  {} )(Allsmurfs)
//export default Allsmurfs;