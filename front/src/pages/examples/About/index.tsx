import React, { useState } from 'react';
import './styles';

interface AboutTypes{
  props?: any
}

function About(props:AboutTypes) {

  return (
    <section className="About">
      <h1>Sobre</h1>
      <p>O nosso sistema foi criado...</p>
    </section>
  )
}

export default About