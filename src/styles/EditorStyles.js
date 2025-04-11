import styled from 'styled-components';
import { media, spacing, fontSizes, themeVars } from './responsive';

export const EditorContainer = styled.div`
  height: ${props => props.isFullScreen ? 'calc(100vh - 250px)' : '500px'};
  border: 1px solid ${themeVars.borderColor};
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.3s ease, height 0.3s ease;
  display: flex;
  flex-direction: column;
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

export const EditorWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%; // Đảm bảo chiều rộng đầy đủ
  
  .monaco-editor {
    transition: background-color 0.3s ease;
    width: 100% !important; // Force width 100%
  }
  
  .monaco-editor-container {
    width: 100% !important; // Force width 100%
  }
  
  &.reset-flash .monaco-editor {
    animation: flashEffect 0.5s;
  }
  
  @keyframes flashEffect {
    0% { 
      background-color: rgba(255, 255, 0, 0.1); 
    }
    50% { 
      background-color: rgba(255, 255, 0, 0.3); 
    }
    100% { 
      background-color: transparent; 
    }
  }
`;

export const EditorHeader = styled.div`
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

export const EditorTitle = styled.div`
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

// Tạo button rõ ràng và dễ nhấn hơn
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

export const EditorControls = styled.div`
  display: flex;
  gap: ${spacing.sm.default}px;
  flex-wrap: wrap; // Cho phép các nút xuống dòng khi cần
  
  ${media.md`
    gap: ${spacing.xs.md}px;
  `}
  
  ${media.sm`
    gap: ${spacing.xs.sm}px;
  `}
  
  ${media.xs`
    width: 100%;
    justify-content: space-between;
    gap: ${spacing.xs.xs}px;
    margin-top: ${spacing.xs.xs}px;
  `}
`;

export const EditorFooter = styled.div`
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

export const EditorInfo = styled.div`
  display: flex;
  gap: ${spacing.sm.default}px;
  
  ${media.sm`
    gap: ${spacing.xs.sm}px;
  `}
  
  ${media.xs`
    width: 100%;
    justify-content: space-between;
  `}
`;

export const EditorInfoBadge = styled.span`
  background-color: ${themeVars.panelBg};
  color: ${themeVars.textColor};
  padding: ${spacing.xs.default}px ${spacing.xs.default}px;
  border-radius: 4px;
  border: 1px solid ${themeVars.borderColor};
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
    font-size: ${fontSizes.xs.xs}rem;
    min-height: 24px; // Đảm bảo chiều cao tối thiểu
    white-space: nowrap; // Ngăn chữ bị xuống dòng
  `}
`;

export const OptionButton = styled.button`
  padding: ${spacing.xs.default}px;
  background-color: transparent;
  color: ${themeVars.textColor};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${fontSizes.sm.default}rem;
  min-width: 30px; // Đảm bảo chiều rộng tối thiểu
  min-height: 30px; // Đảm bảo chiều cao tối thiểu
  
  &:hover {
    color: ${themeVars.primary};
  }
  
  ${media.md`
    font-size: ${fontSizes.sm.md}rem;
  `}
  
  ${media.sm`
    font-size: ${fontSizes.sm.sm}rem;
    padding: 4px;
  `}
  
  ${media.xs`
    font-size: ${fontSizes.sm.xs}rem;
    padding: 4px;
    min-width: 32px;
    min-height: 32px;
    justify-content: center;
  `}
  
  span.text {
    ${media.xs`
      display: none;
    `}
  }
`;