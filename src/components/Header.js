import React from 'react';

function Header() {
  return (
    <header className="d-flex align-items-center p-3 bg-light border-bottom shadow-sm mb-3">
      <img 
        src="/logo192.png"
        alt="Jarurat Care Logo"
        style={{ height: '40px', marginRight: '12px' }}
      />
      <h1 className="h4 m-0 fw-bold text-primary">Jarurat Care</h1>
    </header>
  );
}

export default Header;
