import React from 'react';
import styled from 'styled-components';

//Styled Components
const StyledImageWidth = styled.img`
  width: 20vw;`

const StyledExplanation = styled.div`
  text-align: justify;`

const StyledGhostTitle = styled.p`
  color: purple;
  opacity: .4;

  &: hover{
    opacity: 1;
  }
`






function PhotoDisplay(props) {
  const { name } = props;

  return (
    <div>
      <h1>{name.title}</h1>
      <div className="imageDiv">
        { name.url ? <StyledImageWidth className='image' src={name.url} alt={name.title}></StyledImageWidth>
                   : <div> Photo loading... </div>
        }
        { name.date ? <h5> Date: {name.date}  Copyright: {name.copyright}</h5>
                    : <h5> Date unknown  Copyright: {name.copyright}</h5>
        }  
      </div>
      <StyledExplanation>
        <StyledGhostTitle><strong>{name.title}</strong></StyledGhostTitle>
        <p>{name.explanation}</p>
      </StyledExplanation>
    </div>
  );
}

export default PhotoDisplay;