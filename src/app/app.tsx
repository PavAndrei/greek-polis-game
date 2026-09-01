import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { GameOverPage, GamePage } from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/game-over" element={<GameOverPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
