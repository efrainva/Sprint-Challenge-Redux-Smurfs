import React from 'react';

const Smurf = (props) => {
  return (
    <div>
    <p>name:{props.smurfs.name}</p>
    <p>age:{props.smurfs.age} </p>
    </div>
  )
}
export default Smurf;