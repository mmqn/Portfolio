import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import StoryCard from '../components/StoryCard';
import matchAgainstFilters from '../util/matchAgainstFilters';

const Home = ({ stories, isMobile, mountMobileStoryReader }) => {
  const [currentStories, setCurrentStories] = useState(stories);
  const [activeFilters, setActiveFilters] = useState([]);

  const contentRef = useRef(null);

  // Set page vertical scroll position to previous position
  useEffect(() => {
    const lastPagePosition =
      sessionStorage.getItem('last-page-position') || null;

    if (contentRef && lastPagePosition) {
      contentRef.current.scrollTop = lastPagePosition;
    }
  }, []);

  useEffect(() => {
    setCurrentStories(stories);
  }, [stories]);

  const updateLastPagePosition = ev => {
    const contentScrollTop = ev.target.scrollTop;
    sessionStorage.setItem('last-page-position', contentScrollTop);
  };

  const handleFiltering = newFilters => {
    if (newFilters.length > 0) {
      const newStories = stories.filter(story =>
        matchAgainstFilters({
          objectProperties: story.tags,
          filtersToMatch: newFilters,
        }),
      );

      setCurrentStories(newStories);
    } else setCurrentStories(stories);
  };

  const handleFilteringPreprocess = newFilter => {
    setActiveFilters(prevActiveFilters => {
      let newActiveFilters = [];
      const filterIsActive = prevActiveFilters.includes(newFilter);

      if (filterIsActive) {
        newActiveFilters = prevActiveFilters.filter(
          filter => filter !== newFilter,
        );
      } else if (!filterIsActive) {
        newActiveFilters = [...prevActiveFilters, newFilter];
      }

      handleFiltering(newActiveFilters);
      return newActiveFilters;
    });
  };

  return (
    <main ref={contentRef} onScroll={updateLastPagePosition}>
      <Navbar
        isMobile={isMobile}
        stories={stories}
        activeFilters={activeFilters}
        handleFiltering={handleFilteringPreprocess}
      />

      {currentStories.map(story => (
        <StoryCard
          key={story.id}
          storyInfo={story}
          isMobile={isMobile}
          handleFiltering={handleFilteringPreprocess}
          mountMobileStoryReader={mountMobileStoryReader}
        />
      ))}

      {isMobile && <div className='scroll-right-hint' />}
    </main>
  );
};

Home.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      brief: PropTypes.string,
    }),
  ),
  isMobile: PropTypes.bool.isRequired,
  mountMobileStoryReader: PropTypes.func.isRequired,
};

export default Home;
