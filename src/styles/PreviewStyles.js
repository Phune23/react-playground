import styled from 'styled-components';
import { LiveError, LivePreview } from 'react-live';
import { media, spacing, fontSizes, themeVars } from './responsive';

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeVars.borderColor};
  border-radius: 4px;
  overflow: hidden;
  height: ${props => props.isFullScreen ? 'calc(100vh - 250px)' : '500px'};
  background-color: ${themeVars.panelBg};
  transition: background-color 0.3s ease, border-color 0.3s ease;
  width: 100%; // Đảm bảo chiều rộng luôn đầy đủ
  max-width: 100%; // Ngăn tràn khỏi container cha
  
  ${media.lg`
    height: ${props => props.isFullScreen ? 'calc(100vh - 230px)' : '450px'};
  `}
  
  ${media.md`
    height: ${props => props.isFullScreen ? 'calc(100vh - 220px)' : '400px'};
  `}
  
  ${media.sm`
    height: ${props => props.isFullScreen ? 'calc(100vh - 200px)' : '350px'};
  `}
  
  ${media.xs`
    height: ${props => props.isFullScreen ? 'calc(100vh - 180px)' : '300px'};
  `}
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.xs.default}px ${spacing.sm.default}px;
  background-color: ${themeVars.panelBg};
  border-bottom: 1px solid ${themeVars.borderColor};
  width: 100%; // Đảm bảo chiều rộng đầy đủ
  box-sizing: border-box;
  
  ${media.md`
    padding: ${spacing.xs.md}px ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.xs.sm}px;
  `}
  
  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.xs.xs}px;
  `}
`;

export const PreviewTitle = styled.div`
  font-weight: 500;
  color: ${themeVars.textColor};
  font-size: ${fontSizes.md.default}rem;
  
  ${media.md`
    font-size: ${fontSizes.sm.md}rem;
  `}
  
  ${media.sm`
    font-size: ${fontSizes.sm.sm}rem;
  `}
`;

export const PreviewControls = styled.div`
  display: flex;
  gap: ${spacing.xs.default}px;
  
  ${media.xs`
    width: 100%;
    justify-content: flex-end;
  `}
`;

export const PreviewContent = styled.div`
  flex: 1;
  padding: ${spacing.md.default}px;
  overflow: auto;
  width: 100%;
  box-sizing: border-box;
  
  ${media.md`
    padding: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    padding: ${spacing.sm.sm}px;
  `}
  
  ${media.xs`
    padding: ${spacing.xs.xs}px;
  `}
`;

export const StyledLivePreview = styled(LivePreview)`
  /* Styles for buttons within preview */
  button {
    background-color: ${themeVars.buttonBg};
    color: ${themeVars.buttonColor};
    border: 1px solid ${themeVars.borderColor};
    border-radius: 4px;
    padding: ${spacing.xs.default}px ${spacing.sm.default}px;
    cursor: pointer;
    
    &:hover {
      background-color: ${themeVars.buttonHover};
    }
    
    ${media.md`
      padding: ${spacing.xs.md}px ${spacing.sm.md}px;
    `}
    
    ${media.sm`
      padding: ${spacing.xs.sm}px ${spacing.sm.sm}px;
      font-size: ${fontSizes.sm.sm}rem;
    `}
  }
  
  /* Styles for inputs within preview */
  input, textarea, select {
    padding: ${spacing.xs.default}px;
    border: 1px solid ${themeVars.borderColor};
    border-radius: 4px;
    background-color: ${props => props.theme === 'dark' ? '#444' : '#fff'};
    color: ${themeVars.textColor};
    
    ${media.sm`
      padding: ${spacing.xs.sm}px;
      font-size: ${fontSizes.sm.sm}rem;
    `}
  }
  
  /* Styles for headings within preview */
  h1, h2, h3, h4, h5, h6 {
    color: ${themeVars.textColor};
    
    ${media.sm`
      margin-top: ${spacing.sm.sm}px;
      margin-bottom: ${spacing.sm.sm}px;
    `}
  }
  
  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Containers in preview */
  div {
    max-width: 100%;
  }
`;

export const PreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.xs.default}px ${spacing.sm.default}px;
  background-color: ${themeVars.panelBg};
  border-top: 1px solid ${themeVars.borderColor};
  font-size: ${fontSizes.xs.default}rem;
  color: ${themeVars.secondary};
  
  ${media.md`
    padding: ${spacing.xs.md}px ${spacing.sm.md}px;
    font-size: ${fontSizes.xs.md}rem;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.xs.sm}px;
    font-size: ${fontSizes.xs.sm}rem;
  `}
  
  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.xs.xs}px;
  `}
`;

export const PreviewStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs.default}px;
  
  ${media.sm`
    gap: ${spacing.xs.sm}px;
  `}
`;

export const PreviewStatusBadge = styled.span`
  background-color: ${props => props.hasError ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.hasError ? '#d32f2f' : '#2e7d32'};
  padding: ${spacing.xs.default}px ${spacing.xs.default}px;
  border-radius: 4px;
  font-size: ${fontSizes.xs.default}rem;
  display: flex;
  align-items: center;
  gap: 4px;
  
  ${media.md`
    padding: 3px 5px;
    font-size: ${fontSizes.xs.md}rem;
  `}
  
  ${media.xs`
    padding: 4px 6px;
    font-size: ${fontSizes.sm.xs}rem; // Tăng font size
    min-height: 24px;
    min-width: 60px; // Đảm bảo chiều rộng tối thiểu
    justify-content: center;
  `}
`;

export const ErrorMessage = styled(LiveError)`
  color: ${themeVars.errorColor};
  background-color: ${themeVars.errorBg};
  padding: ${spacing.sm.default}px;
  margin-top: ${spacing.sm.default}px;
  border-radius: 4px;
  font-family: monospace;
  font-size: ${fontSizes.sm.default}rem;
  overflow-x: auto;
  
  ${media.md`
    padding: ${spacing.xs.md}px;
    font-size: ${fontSizes.xs.md}rem;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px;
    font-size: ${fontSizes.xs.sm}rem;
  `}
  
  ${media.xs`
    padding: ${spacing.sm.xs}px;
    font-size: ${fontSizes.sm.xs}rem; // Tăng font size
    border: 1px solid #ff6b6b; // Tăng visibility cho errors
    line-height: 1.4;
  `}
`;

export const ActionButton = styled.button`
  padding: ${spacing.xs.default}px ${spacing.sm.default}px;
  background-color: ${props => props.primary ? themeVars.primary : themeVars.buttonBg};
  color: ${props => props.primary ? '#ffffff' : themeVars.buttonColor};
  border: 1px solid ${props => props.primary ? themeVars.primary : themeVars.borderColor};
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${props => props.primary ? 'bold' : 'normal'};
  font-size: ${fontSizes.sm.default}rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 70px; // Đảm bảo chiều rộng tối thiểu
  min-height: 32px; // Đảm bảo chiều cao tối thiểu
  
  &:hover {
    background-color: ${props => props.primary ? '#0055bb' : themeVars.buttonHover};
  }
  
  ${media.md`
    padding: ${spacing.xs.md}px ${spacing.sm.md}px;
    font-size: ${fontSizes.sm.md}rem;
    min-width: 60px;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.sm.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
    min-width: 50px;
  `}
  
  ${media.xs`
    padding: ${spacing.xs.xs}px ${spacing.sm.xs}px;
    font-size: ${fontSizes.sm.xs}rem;
    min-width: 70px;
    min-height: 40px; // Tăng kích thước cho dễ nhấn trên mobile
    
    // Ưu tiên hiển thị icon trên mobile
    .button-text {
      display: none;
    }
    
    .button-icon {
      font-size: ${fontSizes.md.xs}rem;
    }
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.sm.default}px;
  
  ${media.md`
    gap: ${spacing.xs.md}px;
  `}
  
  ${media.sm`
    gap: ${spacing.xs.sm}px;
  `}
  
  ${media.xs`
    width: 100%;
    justify-content: space-between;
    margin-top: ${spacing.xs.xs}px;
  `}
`;