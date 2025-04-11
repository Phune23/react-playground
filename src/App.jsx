import React, { useState, useEffect, useRef, useContext } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import LessonSelector from './components/LessonSelector';
import ThemeToggler from './components/ThemeToggler';
import { ThemeContext } from './contexts/ThemeContext';
import {
  AppContainer,
  Title,
  HeaderContainer,
  Layout,
  ButtonGroup,
  Button,
  FullScreenButton,
  SectionHeader
} from './styles/AppStyles';

// Import tất cả các bài học
import useStateLesson from './lessons/useState.json';
import useEffectLesson from './lessons/useEffect.json';
import componentsLesson from './lessons/components.json';
import propsLesson from './lessons/props.json';
import eventHandlingLesson from './lessons/eventHandling.json';
import conditionalRenderingLesson from './lessons/conditionalRendering.json';
import listKeysLesson from './lessons/listKeys.json';
import useContextLesson from './lessons/useContext.json';

function App() {
  const { theme } = useContext(ThemeContext);

  // Bài học sẽ là một mảng các bài học
  const lessons = [
    useStateLesson,
    useEffectLesson,
    componentsLesson,    
    propsLesson,        
    eventHandlingLesson,
    conditionalRenderingLesson,
    listKeysLesson,
    useContextLesson
  ];
  const [activeLesson, setActiveLesson] = useState(null);
  const [code, setCode] = useState('');
  const [runningCode, setRunningCode] = useState('');
  const [originalCode, setOriginalCode] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    // Mặc định chọn bài học đầu tiên khi khởi động
    if (lessons.length > 0) {
      selectLesson(lessons[0]);
    }
    
    // Lắng nghe sự kiện thay đổi trạng thái fullscreen
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const handleFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Không thể chuyển sang chế độ toàn màn hình: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const selectLesson = (lesson) => {
    setActiveLesson(lesson);
    setCode(lesson.code);
    setRunningCode(lesson.code);
    setOriginalCode(lesson.code);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleReset = () => {
    // Đảm bảo lấy code gốc từ file lesson hiện tại
    const originalLessonCode = activeLesson?.code || originalCode;
    
    // Reset code trong state
    setCode(originalLessonCode);
    setRunningCode(originalLessonCode);
    
    // Reset trực tiếp nội dung trong editor nếu có ref
    if (editorRef.current) {
      editorRef.current.setValue(originalLessonCode);
    }
    
    // Hiệu ứng thông báo
    const editorElement = document.querySelector('.monaco-editor');
    if (editorElement) {
      editorElement.classList.add('reset-flash');
      setTimeout(() => {
        editorElement.classList.remove('reset-flash');
      }, 500);
    }
  };

  const handleRun = () => {
    setRunningCode(code); // Cập nhật mã đang chạy từ mã trong editor
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
      
      <Layout isFullScreen={isFullScreen}>
        <div>
          <SectionHeader>Code Editor</SectionHeader>
          <Editor 
            code={code} 
            onChange={handleCodeChange} 
            isFullScreen={isFullScreen}
            onMount={handleEditorDidMount}
            theme={theme}
          />
          <ButtonGroup>
            <Button onClick={handleReset}>Reset</Button>
            <Button primary onClick={handleRun}>Run</Button>
          </ButtonGroup>
        </div>
        <div>
          <SectionHeader>Preview</SectionHeader>
          <Preview code={runningCode} />
        </div>
      </Layout>
    </AppContainer>
  );
}

export default App;
