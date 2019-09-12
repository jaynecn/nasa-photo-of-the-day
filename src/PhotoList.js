import React from 'react';
import PhotoDisplay from './PhotoDisplay';


function PhotoList(props) {
  const { photos } = props;
  return (
    <div>
      <PhotoDisplay 
          key={photos}
          name={photos}
          />
    </div>
  )
}

export default PhotoList;