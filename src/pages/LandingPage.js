import React from 'react';

function LandingPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light min-vh-100">
      <h1 className="mb-3 text-primary fw-bold">Welcome to Jarurat Care</h1>
      <p className="fw-bold mb-2">Jaisi Jarurat, Vaisi Care</p>
      <p className="mb-3 fs-5">We are Committed to Bring Certainty during your Uncertain Times</p>
      <img 
        src="https://jc.vercel.app/_app/immutable/assets/logo-transparent.BSvw7Cn6.webp"
        alt="Jarurat Care Logo"
        style={{ marginTop: '30px', height: '150px' }}
      />
    </div>
  );
}

export default LandingPage;
