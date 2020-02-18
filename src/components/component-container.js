import React from 'react';
import ErrorCatcher from './error-catcher';

const ComponentContainer = ({ label, ...props }) => {
  return (
    <div>
      <h2>{label}</h2>
      <div>
        <ErrorCatcher {...props} />
      </div>
    </div>
  );
};

export default ComponentContainer;
