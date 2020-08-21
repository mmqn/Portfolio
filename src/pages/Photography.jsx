import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import StoryCard from '../components/StoryCard';

const Photography = ({ stories, isMobile }) => {
  return (
    <main>

    </main>
  );
};

Photography.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      brief: PropTypes.string,
    }),
  ),
  isMobile: PropTypes.bool.isRequired,
};

export default Photography;
