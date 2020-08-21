import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import setMarkdownContent from '../util/setMarkdownContent';
import Navbar from '../components/Navbar';

const Story = ({ storyProperties, isMobile }) => {
  const { id, title, tags } = storyProperties;

  const [content, setContent] = useState('<h2>Loading...</h2>');

  useEffect(() => {
    setMarkdownContent({ storyId: id, setContent });
  }, [id]);

  return (
    <>
      <main style={{ flexDirection: 'column' }}>
        {!isMobile && <Navbar isMobile={isMobile} />}

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
      </main>
    </>
  );
};

Story.propTypes = {
  storyProperties: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    brief: PropTypes.string,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Story;
