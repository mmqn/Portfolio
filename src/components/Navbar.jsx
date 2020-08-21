import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilterMenu from '../components/FilterMenu';

const Navbar = ({ isMobile, stories, activeFilters, handleFiltering }) => {
  const uniqueTags = useMemo(() => {
    const allTags = stories.map(story => story.tags).flat();
    return [...new Set(allTags)];
  }, [stories]);

  // TODO Uncomment Photography and About links
  return (
    !isMobile && (
      <nav>
        <div className='nav-links'>
          <Link
            to='/'
            className='unset-a-defaults internal-link'
            // style={{ marginRight: '18px' }}
          >
            Projects
          </Link>

          {/* <Link
          to='/photography/'
          className='unset-a-defaults internal-link'
          style={{ marginRight: '18px' }}
          >
            Photography
          </Link>

          <Link
            to='/about/'
            className='unset-a-defaults internal-link'
          >
            About
          </Link> */}
        </div>

        {!isMobile && stories.length > 0 && (
          <FilterMenu
            allFilters={uniqueTags}
            activeFilters={activeFilters}
            handleFiltering={handleFiltering}
          />
        )}
      </nav>
    )
  );
};

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  activeFilters: PropTypes.arrayOf(PropTypes.string),
  handleFiltering: PropTypes.func,
};

Navbar.defaultProps = {
  stories: [],
  activeFilters: [],
  handleFiltering: () => {},
};

export default Navbar;
