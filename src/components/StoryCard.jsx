import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoryCard = ({
  storyInfo,
  isMobile,
  handleFiltering,
  mountMobileStoryReader,
}) => {
  const { id, title, tags, brief } = storyInfo;

  const handleMountMobileStoryReader = () => mountMobileStoryReader(id);

  const cardContent = (
    <div className='story-card'>
      <h2>{title}</h2>

      <div className='tags-list'>
        {tags.map(tag => (
          <span
            title={`Click to apply filter for ${tag}`}
            key={`${id}-${tag}`}
            className='tag tag-clickable'
            role='button'
            onClick={ev => {
              ev.preventDefault();
              handleFiltering(tag);
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p>{brief}</p>

      <img
        alt={`${title}`}
        src={
          id
            ? `https://raw.githubusercontent.com/mmqn/portfolio_stories/master/${id}/resources/cover.png`
            : null
        }
      />
    </div>
  );

  return isMobile ? (
    <div role='button' onClick={handleMountMobileStoryReader}>
      {cardContent}
    </div>
  ) : (
    <Link to={`/story/${id}`} className='unset-a-defaults'>
      {cardContent}
    </Link>
  );
};

StoryCard.propTypes = {
  storyInfo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    brief: PropTypes.string,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
  handleFiltering: PropTypes.func.isRequired,
  mountMobileStoryReader: PropTypes.func.isRequired,
};

export default StoryCard;
