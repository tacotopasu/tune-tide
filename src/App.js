import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Router>
      <div class="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <MusicPlayer/>
      </div>
    </Router>
  );
}

export default App;