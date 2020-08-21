import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './styles/App.css';
import { lightThemeStyle, darkThemeStyle } from './styles/ThemeStyles';
import useWindowWidthWatcher from './util/useWindowWidthWatcher';
import Sidebar from './components/Sidebar';
import ActionButtons from './components/ActionButtons';
import MobileStoryReader from './components/MobileStoryReader';
import Home from './pages/Home';
import Story from './pages/Story';
import Photography from './pages/Photography';
import About from './pages/About';

const SITE_DECRIPTION =
  'Public repository of a diverse set of coding and design projects I’ve done, ranging from college years as former architecture student, to a applications development student, to now as front-end developer.';

const PROJECTS_ENDPOINT = 'https://portfolio-mmqn.firebaseio.com/projects.json';
const PHOTOS_ENDPOINT = 'https://portfolio-mmqn.firebaseio.com/photos.json';

const loadingStory = {
  id: '',
  title: 'Loading...',
  tags: [],
  brief: '',
};

const errorStory = {
  id: '',
  title: 'Oh dear, something went wrong 🌦',
  tags: [],
  brief:
    "It looks like projects aren't loading right now. It's (probably) not you, it's me.",
};

// Disables scrolling for body element when using mobile story reader
const disableBodyScrolling = `
  body {
    overflow: hidden;
    touch-action: none;
    overscroll-behavior: none;
    -webkit-overflow-scrolling: auto;
  }
}`;

export default () => {
  const curHour = useRef(new Date().getHours()).current;

  const [projectStories, setProjectStories] = useState([loadingStory]);
  const [photographyStories, setPhotographyStories] = useState([loadingStory]);
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(
    curHour >= 18 || curHour <= 7 ? true : false,
  );
  const [
    mobileStoryReaderProperties,
    setMobileStoryReaderProperties,
  ] = useState({ mount: false, storyProperties: null });

  const windowWidth = useWindowWidthWatcher();
  const currentPage = useLocation().pathname;

  const fetchProjects = async () => {
    const response = await fetch(PROJECTS_ENDPOINT);
    const status = response.status;
    const data = await response.json();

    if (status === 200 && data) {
      setProjectStories(data);
    } else {
      console.warn({ status, response });
      setProjectStories([errorStory]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const isMobile = windowWidth <= 999;
  const isHomePage = useMemo(() => !/\/story\//gi.test(currentPage), [
    currentPage,
  ]);

  const mountMobileStoryReader = storyId =>
    setMobileStoryReaderProperties({
      mount: true,
      storyProperties: projectStories.find(({ id }) => id === storyId) || {
        id: '0',
        title: 'Error: Unable to load article 🌧',
        tags: [],
        brief: 'Please try refreshing this page.',
      },
    });

  const unmountMobileStoryReader = () =>
    setMobileStoryReaderProperties({ mount: false, storyId: null });

  return (
    <>
      <div
        id='container'
        className={
          mobileStoryReaderProperties.mount ? 'scale-down' : 'scale-back'
        }
      >
        <style>{isUsingDarkTheme ? darkThemeStyle : lightThemeStyle}</style>

        <style>
          {mobileStoryReaderProperties.mount ? disableBodyScrolling : ''}
        </style>

        <Sidebar
          siteDescription={SITE_DECRIPTION}
          windowWidth={windowWidth}
          isMobile={isMobile}
          isHomePage={isHomePage}
          isUsingDarkTheme={isUsingDarkTheme}
        />

        <Switch>
          {projectStories.map(story => (
            <Route key={story.id} path={`/story/${story.id}/`}>
              <Story storyProperties={story} isMobile={isMobile} />
            </Route>
          ))}

          <Route path='/photos/'>
            <Photography stories={photographyStories} isMobile={isMobile} />
          </Route>

          <Route path='/about/'>
            <About />
          </Route>

          <Route>
            <Home
              stories={projectStories}
              isMobile={isMobile}
              mountMobileStoryReader={mountMobileStoryReader}
            />
          </Route>
        </Switch>
      </div>

      <ActionButtons
        isHomePage={isHomePage}
        isUsingDarkTheme={isUsingDarkTheme}
        setIsUsingDarkTheme={setIsUsingDarkTheme}
      />

      {mobileStoryReaderProperties.mount && (
        <MobileStoryReader
          storyProperties={mobileStoryReaderProperties.storyProperties}
          unmountMobileStoryReader={unmountMobileStoryReader}
        />
      )}
    </>
  );
};
