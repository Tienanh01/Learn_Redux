import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
