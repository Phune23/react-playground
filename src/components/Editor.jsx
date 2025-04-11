import React, { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { getDeviceType, getResponsiveFontSize } from '../utils/deviceDetect';
import { configureMonacoForJSX } from '../utils/monaco-jsx-config';
import '../styles/monaco-custom.css';
import {
  EditorContainer,
  EditorWrapper,
  EditorHeader,
  EditorTitle,
  EditorControls,
  EditorFooter,
  EditorInfo,
  EditorInfoBadge,
  ActionButton
} from '../styles/EditorStyles';

const Editor = ({ code, onChange, isFullScreen, onMount, theme, onReset, onRun }) => {
  const [isWrap, setIsWrap] = useState(true);
  const [editorStatus, setEditorStatus] = useState({ lines: 0, chars: 0 });
  const [deviceType, setDeviceType] = useState(getDeviceType());
  
  // Update device type on window resize
  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Tự động điều chỉnh font size theo kích thước màn hình
  const getFontSize = () => getResponsiveFontSize(14);
  
  // Handle editor did mount
  const handleEditorDidMount = (editor, monaco) => {
    // Cấu hình Monaco cho JSX
    configureMonacoForJSX(monaco);
    
    // Call the provided onMount function
    if (onMount) onMount(editor, monaco);
    
    // Update editor stats
    updateEditorStats(editor);
    
    // Update stats when content changes
    editor.onDidChangeModelContent(() => {
      updateEditorStats(editor);
    });
  };
  
  // Update editor statistics
  const updateEditorStats = (editor) => {
    if (!editor) return;
    
    const model = editor.getModel();
    if (!model) return;
    
    const text = model.getValue();
    const lines = model.getLineCount();
    const chars = text.length;
    
    setEditorStatus({ lines, chars });
  };
  
  // Toggle word wrap
  const toggleWordWrap = () => {
    setIsWrap(!isWrap);
  };
  
  // Xác định theme hợp lý cho editor
  const getEditorTheme = () => {
    return theme === 'dark' ? 'reactThemeDark' : 'reactThemeLight';
  };
  
  return (
    <EditorContainer isFullScreen={isFullScreen}>
      <EditorHeader>
        <EditorTitle>Code Editor</EditorTitle>
        <EditorControls>
          <ActionButton onClick={toggleWordWrap}>
            <span className="button-icon">{isWrap ? '↩' : '⟶'}</span>
            <span className="button-text">Wrap: {isWrap ? 'On' : 'Off'}</span>
          </ActionButton>
          
          {onReset && (
            <ActionButton onClick={onReset}>
              <span className="button-icon">🔄</span>
              <span className="button-text">Reset</span>
            </ActionButton>
          )}
          
          {onRun && (
            <ActionButton primary onClick={onRun}>
              <span className="button-icon">▶️</span>
              <span className="button-text">Run</span>
            </ActionButton>
          )}
        </EditorControls>
      </EditorHeader>
      
      <EditorWrapper>
        <MonacoEditor
          height="100%"
          width="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={onChange}
          onMount={handleEditorDidMount}
          theme={getEditorTheme()}
          options={{
            minimap: { enabled: deviceType !== 'mobile' },
            fontSize: getFontSize(),
            wordWrap: isWrap ? 'on' : 'off',
            formatOnType: true,
            formatOnPaste: true,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 10, bottom: 10 },
            tabSize: 2,
            bracketPairColorization: { enabled: true },
            renderLineHighlight: 'all',
            colorDecorators: true,
            folding: true,
            lineNumbers: 'on',
            suggestOnTriggerCharacters: true,
          }}
        />
      </EditorWrapper>
      
      <EditorFooter>
        <EditorInfo>
          <EditorInfoBadge>
            <span role="img" aria-label="lines">📝</span> {editorStatus.lines} lines
          </EditorInfoBadge>
          <EditorInfoBadge>
            <span role="img" aria-label="characters">🔤</span> {editorStatus.chars} chars
          </EditorInfoBadge>
        </EditorInfo>
        
        <EditorInfoBadge>
          {deviceType === 'mobile' ? '📱' : deviceType === 'tablet' ? '📟' : '🖥️'} {deviceType}
        </EditorInfoBadge>
      </EditorFooter>
    </EditorContainer>
  );
};

export default Editor;