import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  let navigate = useNavigate();

  return (
    <div className="about">
      <h1>About Page</h1>
      <p><span onClick={() => navigate('/')}>Home</span></p>
    </div>
  );
}

export default AboutPage;