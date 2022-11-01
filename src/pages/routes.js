import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { Details } from './details';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="pokemon/:name" element={<Details/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;