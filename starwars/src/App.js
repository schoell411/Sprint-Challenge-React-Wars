import React from 'react';
import Characters from "./components/CharacterList";
import './App.css';
import styled from 'styled-components';

// const Header = styled.h1`
//   height: 2em;
//   display: flex;
//   justify-content: center;
//   margin-top: 1em;
// `;

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Characters">
        <Characters />
      </div>
    </div>
  );
}

export default App;
