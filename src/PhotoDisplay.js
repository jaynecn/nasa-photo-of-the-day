import React from 'react';

function PhotoDisplay(props) {
  const { name } = props;

  return (
    <div>
      <h1>{name.title}</h1>

    </div>
  );
}

export default PhotoDisplay;