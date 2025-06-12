import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

function Header(props) {
  return (
    <>
      <header>
        {/* 상단헤더 */}
        <h1>
          <Link to='/movieapi' title=''> {/* to => href */}
            <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt='YTS 로고' />
          </Link>
        </h1>

        <Navigation />
      </header>
    </>
  );
}

export default Header;