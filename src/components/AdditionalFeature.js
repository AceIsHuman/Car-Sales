import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AdditionalFeature = props => {
  const buyItem = e => {
    e.preventDefault();
    props.addItem(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => {}, { addItem })(AdditionalFeature);
