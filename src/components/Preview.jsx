import React, { useState, useContext, useEffect } from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { ThemeContext } from '../contexts/ThemeContext';
import { getDeviceType } from '../utils/deviceDetect';
import {
  PreviewContainer,
  PreviewHeader,
  PreviewTitle,
  PreviewContent,
  ButtonGroup,
  StyledLivePreview,
  PreviewFooter,
  PreviewStatus,
  PreviewStatusBadge,
  ErrorMessage,
  ActionButton
} from '../styles/PreviewStyles';

const Preview = ({ code }) => {
  const { theme } = useContext(ThemeContext);
  const [hasError, setHasError] = useState(false);
  const [reload, setReload] = useState(false);
  const [deviceType, setDeviceType] = useState(getDeviceType());
  
  // Update device type on window resize
  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Modify code if it contains ThemeContext
  let modifiedCode = code;
  if (code.includes('ThemeContext') || code.includes('data-theme')) {
    modifiedCode = code.replace(
      "const [theme, setTheme] = React.useState('light');",
      `const [theme, setTheme] = React.useState('${theme}');`
    );
  }
  
  // Force reload preview
  const handleReload = () => {
    setReload(true);
    setTimeout(() => setReload(false), 100);
  };
  
  // Check for errors in preview
  const handleError = (error) => {
    setHasError(!!error);
  };
  
  // If reloading, show nothing temporarily
  if (reload) return <PreviewContainer />;
  
  return (
    <PreviewContainer>
      <PreviewHeader>
        <PreviewTitle>Preview</PreviewTitle>
        <ButtonGroup>
          <ActionButton onClick={handleReload}>
            <span className="button-icon">🔄</span>
            <span className="button-text">Refresh</span>
          </ActionButton>
          
          <PreviewStatusBadge hasError={hasError}>
            {hasError ? (
              <>
                <span role="img" aria-label="error">❌</span> Error
              </>
            ) : (
              <>
                <span role="img" aria-label="success">✅</span> Ready
              </>
            )}
          </PreviewStatusBadge>
        </ButtonGroup>
      </PreviewHeader>
      
      <PreviewContent>
        <LiveProvider code={modifiedCode} scope={{ React }} onError={handleError}>
          <StyledLivePreview data-theme={theme} theme={theme} />
          <ErrorMessage />
        </LiveProvider>
      </PreviewContent>
      
      <PreviewFooter>
        <PreviewStatus>
          <span>Preview Mode</span>
        </PreviewStatus>
        <PreviewStatusBadge>
          {deviceType === 'mobile' ? '📱' : deviceType === 'tablet' ? '📟' : '🖥️'} {deviceType}
        </PreviewStatusBadge>
      </PreviewFooter>
    </PreviewContainer>
  );
};

export default Preview;