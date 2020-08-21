import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActionButtons = ({
  isHomePage,
  isUsingDarkTheme,
  setIsUsingDarkTheme,
}) => {
  const handleSwitchTheme = ev => {
    ev.preventDefault(); // stops event from bubbling to sidebar, which links to home page

    setIsUsingDarkTheme(prevState => !prevState);
  };

  return (
    <div className='action-buttons'>
      {!isHomePage && (
        <Link to='/' className='unset-a-defaults'>
          <button
            type='button'
            className='action-button'
            style={{ marginRight: '10px' }}
          >
            <span
              role='img'
              aria-label='house'
              style={{ fontSize: '16px', marginRight: '12px' }}
            >
              🏡
            </span>{' '}
            Home
          </button>
        </Link>
      )}

      <button
        type='button'
        className='action-button'
        onClick={handleSwitchTheme}
      >
        <span
          role='img'
          aria-label={isUsingDarkTheme ? 'Moon' : 'Sun'}
          style={{ fontSize: '16px', marginRight: '12px' }}
        >
          {isUsingDarkTheme ? '🌘' : '🌤️'}
        </span>
        {isUsingDarkTheme ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
  isUsingDarkTheme: PropTypes.bool.isRequired,
  setIsUsingDarkTheme: PropTypes.func.isRequired,
};

export default ActionButtons;
