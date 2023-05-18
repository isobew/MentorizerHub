import React, { useState } from 'react';
import * as S from './styles';
import { BrowserRouter as 
  Router,
  Routes,
  Route,
  Link } from "react-router-dom";

import About from '../../../pages/examples/About'
import Home from '../../../pages/examples/Home';
import Param from '../../../pages/examples/Param';
import NotFound from '../../../pages/examples/NotFound';

interface ContentTypes{
  props?: any
}

function Content(props:ContentTypes) {

  return (
    <S.Content>
      <Routes>
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/param/:id' element={<Param />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </S.Content>
  )
}

export default Content