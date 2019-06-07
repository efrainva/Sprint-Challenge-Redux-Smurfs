import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import {getInfo} from '../actions';

import Sm from './sm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  this.props.getInfo();
  }
  render() {
    console.log(getInfo())
    if(this.props.fetchingSmurfs){
      <p>getting</p>
    }
    return (
      <div className="App">
        {/* {console.log(this.props.smurfs.map(i => i.name),'map')}
        <Sm smu ={this.props.smurfs} />
        {console.log(this.props.smurfs.name,'here')} */}
        </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return{
    smurfs:state.smurfs
    
  };
};
export default connect(mapStateToProps,
  {getInfo}
  )(App);

//export default App;
