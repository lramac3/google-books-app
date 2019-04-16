import React from 'react';
import './style.css';

const Footer = () => (
  <footer className='page-footer'>
    <div className='container-fluid text-center'>
    
      <p>&copy; {new Date().getFullYear()} Copyright:
          Linu Ramachandran</p>
    </div>
  </footer>
);

export default Footer;
