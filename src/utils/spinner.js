import React from 'react';

function Spinner(props) {
  return (
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;

