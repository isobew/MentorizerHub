import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles';

interface ParamTypes{
  props?: any
}

function Param(props:ParamTypes) {
    const { id } = useParams();

  return (
    <section className="Param">
      <h1>Param</h1>
      <p>Valor: {id}</p>
    </section>
  )
}

export default Param