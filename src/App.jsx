import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from "react-redux";
import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import WorldviewPage from './pages/WorldviewPage'
import FlowerShopPage from './pages/FlowerShopPage'
import ArtGalleryPage from './pages/ArtGalleryPage';
import FanClubPage from './pages/FanClubPage';
import TeamPage from './pages/TeamPage';

import Garden from "./components/Garden";
import { useGardenPosition } from './hooks/useGardenPosition';
import store from "./redux/store";


function AppContent() {
  const location = useLocation();
  const showGarden = location.pathname !== '/world/flowershop';
  const isStuck = useGardenPosition();

  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="world">
          <Route path="" element={<WorldviewPage />} />
          <Route path="flowershop" element={<FlowerShopPage />} />
        </Route>
        <Route path="/gallery" element={<ArtGalleryPage />} />
        <Route path="/fanclub" element={<FanClubPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      {showGarden && <Garden isStuck={isStuck} />}
    </div>
  );
}


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
