import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import PhotoList from './PhotoList';

function App() {
  const [list, setList] = useState({
    photos: []    
  });

  useEffect(() => {
    axios.get('https://lambda-github-api-server.herokuapp.com/')
      .then((response) => {
        console.log(response.data);
        setList({photos: response.data});
    })
      .catch((error) => {
      console.log(`API error: ${error.message}`);
    }) 
  }, [])
  

  return (
    <div className="App">
      <PhotoList photos={list.photos} />
    </div>
  );
}

export default App;
