import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div class="place-items-center flex flex-col items-center justify-center">
      <h1 class="text-7xl font-bold">Tune Tide 🌊</h1>
      <p class="italic">Your Music. Your Wave.</p>
      <Link to="/about" class="text-blue-500">About</Link>
    </div>
  );
}

export default HomePage;