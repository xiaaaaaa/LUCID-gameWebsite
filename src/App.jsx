import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import WorldviewPage from './pages/WorldviewPage'
import FlowerShopPage from './pages/FlowerShopPage'
import Garden from "./components/Garden";

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
      </Routes>
      {showGarden && <Garden />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;