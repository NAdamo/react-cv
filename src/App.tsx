import React from 'react';
import { Container } from '@material-ui/core';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';



function App() {
  return (
    <Container >
      <About />
      <Experience />
    </Container >
  );
}

export default App;
