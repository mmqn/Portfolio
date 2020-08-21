import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import lightLogo from '../img/logo_light.svg';
import darkLogo from '../img/logo_dark.svg';

const Sidebar = ({
  siteDescription,
  windowWidth,
  isMobile,
  isHomePage,
  isUsingDarkTheme,
}) => {
  return (
    <>
      <Link to='/' className='unset-a-defaults' style={{ marginRight: '2vw' }}>
        <aside role='button'>
          <img
            alt='Personal Logo'
            src={isUsingDarkTheme ? lightLogo : darkLogo}
          />

          <h1 style={isMobile ? {} : { fontSize: windowWidth * 0.028 }}>
            Michael M.
            <br />
            Q. Nguyen
          </h1>

          {isMobile && isHomePage && <p>{siteDescription}</p>}

          {!isMobile && <p>{siteDescription}</p>}
        </aside>
      </Link>
    </>
  );
};

Sidebar.propTypes = {
  siteDescription: PropTypes.string.isRequired,
  windowWidth: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isHomePage: PropTypes.bool.isRequired,
  isUsingDarkTheme: PropTypes.bool.isRequired,
};

export default Sidebar;
