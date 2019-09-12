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
const StyledButton = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  color: white;

  ${props => (props.type === "image" ? `background: purple`: null)}
  ${props => (props.type === "Nasa" ? `background: blue`: null)}
  `;


function PhotoDisplay(props) {
  const { name } = props;

  const testMe = () => {
    console.log('testMe');
  }

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
      <StyledButton type="image" href={name.url} onClick={()=> window.open("{name.url}", "_blank")} alt={name.title}>Image Link</StyledButton>
      <StyledButton type="Nasa" href="https://www.nasa.gov/" onClick={()=> window.open("https://www.nasa.gov/", "_blank")} alt={name.title}>NASA</StyledButton>
      <StyledExplanation>
        <StyledGhostTitle><strong>{name.title}</strong></StyledGhostTitle>
        <p>{name.explanation}</p>
      </StyledExplanation>
    </div>
  );
}

export default PhotoDisplay;