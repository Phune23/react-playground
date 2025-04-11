import React, { useEffect, useState } from 'react';
import { isMobile } from '../utils/deviceDetect';
import { AppContainer, FullScreenButton, HeaderContainer, Title, ThemeToggler, LessonSelector, Layout, SectionHeader, Editor, ButtonGroup, Button, Preview } from './components';

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [lessons] = useState([]);
  const [activeLesson, setActiveLesson] = useState(null);
  const [code, setCode] = useState('');
  const [runningCode, setRunningCode] = useState('');
  const [theme] = useState('light');
  const [mobileView, setMobileView] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const selectLesson = (lesson) => {
    setActiveLesson(lesson);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleReset = () => {
    setCode('');
  };

  const handleRun = () => {
    setRunningCode(code);
  };

  const handleEditorDidMount = () => {
    // Editor mount logic
  };

  return (
    <AppContainer isFullScreen={isFullScreen}>
      <FullScreenButton onClick={toggleFullScreen}>
        {isFullScreen ? 'Thoát' : 'Full Screen'}
      </FullScreenButton>

      <HeaderContainer>
        <Title isFullScreen={isFullScreen}>🚀 React Learning Playground</Title>
        <ThemeToggler />
      </HeaderContainer>

      <LessonSelector 
        lessons={lessons} 
        activeLesson={activeLesson}
        onSelectLesson={selectLesson}
      />

      <Layout isFullScreen={isFullScreen} mobileView={mobileView}>
        <div>
          <SectionHeader>Code Editor</SectionHeader>
          <Editor 
            code={code} 
            onChange={handleCodeChange} 
            isFullScreen={isFullScreen}
            onMount={handleEditorDidMount}
            theme={theme}
            mobileView={mobileView}
          />
          <ButtonGroup>
            <Button onClick={handleReset}>Reset</Button>
            <Button primary onClick={handleRun}>Run</Button>
          </ButtonGroup>
        </div>
        <div>
          <SectionHeader>Preview</SectionHeader>
          <Preview 
            code={runningCode} 
            isFullScreen={isFullScreen}
            mobileView={mobileView}
          />
        </div>
      </Layout>
    </AppContainer>
  );
}

export default App;