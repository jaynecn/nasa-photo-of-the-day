import React from 'react';
import styled from 'styled-components';
import "./App.css";

//Styled Components
const StyledImage = styled.img`
  width: 20vw;
  animation-name: App-logo-spin;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-direction: linear;
    animation-iteration-count: 2;`

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

  return (
    <div>
      <h1>{name.title}</h1>
      <div className="imageDiv">
        { name.url ? <StyledImage className='image' src={name.url} alt={name.title}></StyledImage>
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