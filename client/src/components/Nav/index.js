import React from 'react';
import "./style.css";

function Nav () {
  return (
    <nav className='navbar navbar-expand-lg navbar-custom'>
      <a className='navbar-brand' href='/'>
        <h2 className='text-white'>Google Books Search</h2>
      </a>
      <div id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item' id='home'>
            <a className='nav-link' href='/'>
              <button type='button' className='btn btn-info text-white'>
                Search
              </button>
            </a>
          </li>
          <li className='nav-item' id='report'>
            <a className='nav-link' href='/saved'>
              <button type='button' className='btn btn-warning text-white'>
                Saved
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
