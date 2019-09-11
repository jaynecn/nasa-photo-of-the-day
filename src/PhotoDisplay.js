import React from 'react';

function PhotoDisplay(props) {
  const { name } = props;

  return (
    <div>
      <h1>{name.title}</h1>
      <div className="imageDiv">
        <img className='image' src={name.url} alt={name.title}></img>
        <h5>Date: {name.date}  Copyright: {name.copyright}</h5> 
      </div>
      <div className="explanation">
        <p><strong>{name.title}</strong></p>
        <p>{name.explanation}</p>
      </div>
    </div>
  );
}

export default PhotoDisplay;