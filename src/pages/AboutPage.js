import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="about">
      <h1>About Page</h1>
      <Link to="/" class="text-blue-500">Home</Link>
    </div>
  );
}

export default AboutPage;