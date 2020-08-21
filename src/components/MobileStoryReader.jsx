import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import setMarkdownContent from '../util/setMarkdownContent';
import chevronDown from '../img/chevron_down.svg';

const MobileStoryReader = ({ storyProperties, unmountMobileStoryReader }) => {
  const { id, title, tags } = storyProperties;

  const [content, setContent] = useState('<h2>Loading...</h2>');
  const [isUnmounting, setIsUnmounting] = useState(false);

  useEffect(() => {
    setMarkdownContent({ storyId: id, setContent });
  }, [id]);

  const handleUnmount = () => setIsUnmounting(true);

  const CloseButton = ({ isBottom }) => (
    <button
      type='button'
      className='mobile-story-reader-close-button'
      style={isBottom ? { marginBottom: '120px' } : {}}
      onClick={handleUnmount}
    >
      <img alt='Chevron Down' src={chevronDown} style={{ width: '70px' }} />
    </button>
  );

  CloseButton.propTypes = { isBottom: PropTypes.bool };
  CloseButton.defaultProps = { isBottom: false };

  return (
    <>
      <div
        id='mobile-story-reader'
        className={isUnmounting ? 'mobile-story-reader--slide-out' : ''}
        onScroll={ev => ev.target.scrollTop < -100 && handleUnmount()}
        onAnimationEnd={isUnmounting ? unmountMobileStoryReader : null}
      >
        <CloseButton />

        <div className='story-title'>
          <h2>{title}</h2>

          <div className='tags-list'>
            {tags.map(tag => (
              <span key={tag} className='tag' style={{ cursor: 'text' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article dangerouslySetInnerHTML={{ __html: content }} />

        <CloseButton isBottom />
      </div>

      <div
        id='background-cover'
        className={isUnmounting ? 'fade-out' : 'fade-in'}
      />
    </>
  );
};

MobileStoryReader.propTypes = {
  storyProperties: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    brief: PropTypes.string,
  }).isRequired,
  unmountMobileStoryReader: PropTypes.func.isRequired,
};

export default MobileStoryReader;
