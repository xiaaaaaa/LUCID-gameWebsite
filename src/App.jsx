import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from "react-redux";
import './App.css';
import HomePage from './pages/HomePage'
import WorldviewPage from './pages/WorldviewPage'
import FlowerShopPage from './pages/FlowerShopPage'
import ArtGalleryPage from './pages/ArtGalleryPage';
import FanClubPage from './pages/FanClubPage';
import TeamPage from './pages/TeamPage';

import Garden from "./components/Garden";
import store from "./redux/store";

// 若是畫面在「花店頁面 /world/flowershop」garden 元件就不會顯示
function AppContent() {
  const location = useLocation();
  const showGarden = location.pathname !== '/world/flowershop';

  return (
    <>
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
      {showGarden && <Garden />}
    </>
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