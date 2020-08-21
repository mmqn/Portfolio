import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FilterMenu = ({ allFilters, activeFilters, handleFiltering }) => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    if (activeFilters.length > 0) setIsFlashing(true);
  }, [activeFilters]);

  return (
    <div id='filter-menu-opener'>
      <button
        type='button'
        className={`internal-link ${isFlashing ? 'flash' : ''}`}
        onAnimationEnd={() => setIsFlashing(false)}
      >
        Filter
      </button>

      <div id='filter-menu' className='fade-in'>
        {allFilters.map(tag => {
          const handleForwardFiltering = () => handleFiltering(tag);

          return (
            <p
              key={tag}
              className='tag tag-clickable'
              role='button'
              onClick={handleForwardFiltering}
            >
              <input
                type='checkbox'
                value={tag}
                checked={activeFilters.includes(tag)}
                readOnly
              />
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  allFilters: PropTypes.array.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFiltering: PropTypes.func.isRequired,
};

export default FilterMenu;
