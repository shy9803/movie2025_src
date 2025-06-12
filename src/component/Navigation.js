import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li><Link to='/movieapi'>Home</Link></li>
        <li><Link to='/intro'>Intro</Link></li>
        <li><Link to='/api'>API</Link></li>
        <li><Link to='/contact'>Contact US</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;