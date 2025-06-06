import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from "react-redux";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';
import HomePage from './pages/HomePage'
import WorldviewPage from './pages/WorldviewPage'
import FlowerShopPage from './pages/FlowerShopPage'
import ArtGalleryPage from './pages/ArtGalleryPage';
import FanClubPage from './pages/FanClubPage';
import TeamPage from './pages/TeamPage';

import Garden from "./components/Garden";
import { useGardenPosition } from './hooks/useGardenPosition';
import { selectLightMode, setColorMode } from "./redux/colorSlice";
import { persistor, store } from "./redux/store";
const queryClient = new QueryClient()



function AppContent() {
  const location = useLocation();
  const showGarden = location.pathname !== '/world/flowershop';
  const isStuck = useGardenPosition();
  const dispatch = useDispatch();
  const getLightMode = useSelector(selectLightMode);
  const [showGardenElement, setShowGardenElement] = useState(false);

  useEffect(() => {
    // 根據 redux store 中的 lightMode 狀態來設置主題
    document.documentElement.setAttribute(
      'data-theme',
      getLightMode ? 'light' : 'dark'
    );
  }, [getLightMode]); // 依賴於 getLightMode

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > window.innerHeight * 0.1) {
              setShowGardenElement(true);
          } else {
              setShowGardenElement(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {showGarden && showGardenElement && <Garden isStuck={isStuck} />}
    </div>
  );
}


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
