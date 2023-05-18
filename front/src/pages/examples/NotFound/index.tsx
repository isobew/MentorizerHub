import React, { useState } from 'react';
import './styles';

interface NotFoundTypes{
  props?: any
}

function NotFound(props:NotFoundTypes) {

  return (
    <section className="NotFound">
      <h1>404</h1>
      <p>Not Found!</p>
    </section>
  )
}

export default NotFound