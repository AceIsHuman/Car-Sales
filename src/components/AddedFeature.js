import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeature = props => {
  const removeFeature = e => {
    e.preventDefault();
    props.removeItem(props.feature);
  };
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(()=>{}, { removeItem })(AddedFeature);
