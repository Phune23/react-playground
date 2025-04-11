import styled from 'styled-components';
import { media, spacing, fontSizes, themeVars } from './responsive';

export const AppContainer = styled.div`
  max-width: ${props => props.isFullScreen ? '100%' : '1200px'};
  margin: 0 auto;
  padding: ${props => props.isFullScreen ? '10px' : '20px'};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${themeVars.bgColor};
  color: ${themeVars.textColor};
  height: ${props => props.isFullScreen ? '100vh' : 'auto'};
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden; // Ngăn scroll ngang
  
  ${media.md`
    padding: ${props => props.isFullScreen ? '8px' : '16px'};
  `}
  
  ${media.sm`
    padding: ${props => props.isFullScreen ? '5px' : '12px'};
  `}
  
  ${media.xs`
    padding: ${props => props.isFullScreen ? '4px' : '10px'};
    font-size: 16px; // Đảm bảo kích thước chữ tối thiểu
  `}
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${fontSizes.xxl.default}rem;
  font-weight: bold;
  color: ${themeVars.textColor};
  margin-top: ${props => props.isFullScreen ? '0' : '20px'};
  margin-bottom: 15px;
  
  ${media.lg`
    font-size: ${fontSizes.xl.default}rem;
  `}
  
  ${media.md`
    font-size: ${fontSizes.lg.default}rem;
    margin-top: ${props => props.isFullScreen ? '0' : '15px'};
  `}
  
  ${media.sm`
    font-size: ${fontSizes.md.default}rem;
    margin-top: ${props => props.isFullScreen ? '0' : '10px'};
  `}
  
  ${media.xs`
    font-size: ${fontSizes.lg.xs}rem; // Tăng font size lên để đọc
    margin-top: ${props => props.isFullScreen ? '0' : '5px'};
    margin-bottom: 10px;
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.lg.default}px;
  
  ${media.md`
    margin-bottom: ${spacing.md.md}px;
  `}
  
  ${media.sm`
    flex-direction: column;
    gap: ${spacing.sm.sm}px;
    margin-bottom: ${spacing.md.sm}px;
  `}
  
  ${media.xs`
    gap: ${spacing.sm.xs}px;
    margin-bottom: ${spacing.lg.xs}px;
    padding-top: 40px; // Thêm padding trên đủ cho nút fullscreen
  `}
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.lg.default}px;
  margin-top: ${spacing.md.default}px;
  background-color: ${themeVars.bgColor};
  width: 100%;
  
  ${media.md`
    gap: ${spacing.md.md}px;
    margin-top: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    grid-template-columns: 1fr;
    gap: ${spacing.md.sm}px;
    margin-top: ${spacing.sm.sm}px;
  `}
  
  ${media.xs`
    gap: ${spacing.md.xs}px;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.sm.default}px;
  margin-top: ${spacing.sm.default}px;
  
  ${media.sm`
    justify-content: space-between;
  `}
`;

export const Button = styled.button`
  padding: ${spacing.sm.default}px ${spacing.md.default}px;
  background-color: ${props => props.primary ? themeVars.primary : themeVars.buttonBg};
  color: ${props => props.primary ? '#ffffff' : themeVars.buttonColor};
  border: 1px solid ${props => props.primary ? themeVars.primary : themeVars.borderColor};
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${props => props.primary ? 'bold' : 'normal'};
  transition: all 0.2s ease;
  min-height: 38px; // Đảm bảo chiều cao tối thiểu
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-hover)' : themeVars.buttonHover};
  }
  
  ${media.md`
    padding: ${spacing.sm.md}px ${spacing.md.md}px;
    min-height: 36px;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.sm.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
    flex: 1;
    min-height: 34px;
  `}
  
  ${media.xs`
    padding: ${spacing.xs.xs}px ${spacing.sm.xs}px;
    font-size: ${fontSizes.md.xs}rem;
    min-height: 40px; // Tăng kích thước tối thiểu trên mobile
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const FullScreenButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: ${spacing.sm.default}px ${spacing.md.default}px;
  background-color: ${themeVars.primary};
  color: white;
  border: 1px solid ${themeVars.primary};
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
  font-size: ${fontSizes.sm.default}rem;
  min-width: 90px; // Đảm bảo chiều rộng tối thiểu
  
  &:hover {
    background-color: var(--primary-hover);
  }
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.sm.sm}px;
    font-size: ${fontSizes.xs.sm}rem;
    top: 5px;
    right: 5px;
    min-width: 80px;
  `}
  
  ${media.xs`
    padding: ${spacing.xs.xs}px ${spacing.sm.xs}px;
    font-size: ${fontSizes.sm.xs}rem;
    min-width: 40px;
    min-height: 40px;
    top: 5px;
    right: 5px;
  `}
`;

export const SectionHeader = styled.h3`
  margin-bottom: ${spacing.sm.default}px;
  font-size: ${fontSizes.lg.default}rem;
  color: ${themeVars.textColor};
  
  ${media.md`
    font-size: ${fontSizes.md.md}rem;
  `}
  
  ${media.sm`
    font-size: ${fontSizes.md.sm}rem;
    margin-bottom: ${spacing.xs.sm}px;
  `}
`;

export const MainButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.md.default}px;
  margin-top: ${spacing.md.default}px;
  width: 100%;
  justify-content: center;
  
  ${media.md`
    gap: ${spacing.sm.md}px;
    margin-top: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    gap: ${spacing.sm.sm}px;
    flex-wrap: wrap;
  `}
  
  ${media.xs`
    gap: ${spacing.xs.xs}px;
    justify-content: space-around;
  `}
`;

export const ActionButton = styled.button`
  padding: ${spacing.sm.default}px ${spacing.lg.default}px;
  background-color: ${props => props.primary ? themeVars.primary : themeVars.buttonBg};
  color: ${props => props.primary ? '#ffffff' : themeVars.buttonColor};
  border: 1px solid ${props => props.primary ? themeVars.primary : themeVars.borderColor};
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${props => props.primary ? 'bold' : 'normal'};
  font-size: ${fontSizes.md.default}rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 120px;
  min-height: 40px;
  
  &:hover {
    background-color: ${props => props.primary ? '#0055bb' : themeVars.buttonHover};
  }
  
  ${media.md`
    padding: ${spacing.xs.md}px ${spacing.md.md}px;
    font-size: ${fontSizes.sm.md}rem;
    min-width: 100px;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.md.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
    min-width: 90px;
    flex: 1;
  `}
  
  ${media.xs`
    padding: ${spacing.xs.xs}px ${spacing.sm.xs}px;
    font-size: ${fontSizes.md.xs}rem;
    min-width: 80px;
    min-height: 48px;
    flex-basis: 45%;
  `}
`;