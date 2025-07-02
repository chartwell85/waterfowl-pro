import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Migration from './pages/Migration';
import Forecast from './pages/Forecast';
import MapView from './pages/MapView';
import Journal from './pages/Journal';
import Social from './pages/Social';
import Utils from './pages/Utils';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Migration />} />
      <Route path="forecast" element={<Forecast />} />
      <Route path="map" element={<MapView />} />
      <Route path="journal" element={<Journal />} />
      <Route path="social" element={<Social />} />
      <Route path="utils" element={<Utils />} />
    </Route>
  </Routes>
);
