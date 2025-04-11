import styled from 'styled-components';
import { media, spacing, fontSizes, themeVars } from './responsive';

// Card component dùng chung
export const Card = styled.div`
  background-color: ${themeVars.panelBg};
  border-radius: 8px;
  border: 1px solid ${themeVars.borderColor};
  padding: ${spacing.md.default}px;
  margin-bottom: ${spacing.md.default}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  ${media.md`
    padding: ${spacing.sm.md}px;
    margin-bottom: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    padding: ${spacing.sm.sm}px;
    margin-bottom: ${spacing.sm.sm}px;
  `}
`;

// Badge component
export const Badge = styled.span`
  background-color: ${props => props.primary ? themeVars.primary : '#6c757d'};
  color: white;
  font-size: ${fontSizes.xs.default}rem;
  padding: ${spacing.xs.default}px ${spacing.sm.default}px;
  border-radius: 12px;
  display: inline-block;
  
  ${media.sm`
    font-size: ${fontSizes.xs.sm}rem;
    padding: ${spacing.xs.sm}px ${spacing.xs.sm}px;
  `}
`;

// Flex container
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => spacing[props.gap || 'md'].default}px;
  flex-wrap: ${props => props.wrap || 'nowrap'};
  
  ${media.md`
    gap: ${props => spacing[props.gap || 'md'].md}px;
  `}
  
  ${media.sm`
    flex-direction: ${props => props.responsiveDirection || props.direction || 'column'};
    gap: ${props => spacing[props.gap || 'sm'].sm}px;
  `}
`;

// Grid container
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 12}, 1fr);
  gap: ${props => spacing[props.gap || 'md'].default}px;
  
  ${media.md`
    grid-template-columns: repeat(${props => props.mdCols || 6}, 1fr);
    gap: ${props => spacing[props.gap || 'md'].md}px;
  `}
  
  ${media.sm`
    grid-template-columns: repeat(${props => props.smCols || 2}, 1fr);
    gap: ${props => spacing[props.gap || 'sm'].sm}px;
  `}
  
  ${media.xs`
    grid-template-columns: repeat(${props => props.xsCols || 1}, 1fr);
  `}
`;

// Heading components với responsive design
export const H1 = styled.h1`
  font-size: ${fontSizes.xxxl.default}rem;
  font-weight: bold;
  color: ${themeVars.textColor};
  margin-bottom: ${spacing.lg.default}px;
  
  ${media.md`
    font-size: ${fontSizes.xxl.md}rem;
    margin-bottom: ${spacing.md.md}px;
  `}
  
  ${media.sm`
    font-size: ${fontSizes.xl.sm}rem;
    margin-bottom: ${spacing.sm.sm}px;
  `}
`;

export const H2 = styled.h2`
  font-size: ${fontSizes.xxl.default}rem;
  font-weight: bold;
  color: ${themeVars.textColor};
  margin-bottom: ${spacing.md.default}px;
  
  ${media.md`
    font-size: ${fontSizes.xl.md}rem;
    margin-bottom: ${spacing.md.md}px;
  `}
  
  ${media.sm`
    font-size: ${fontSizes.lg.sm}rem;
    margin-bottom: ${spacing.sm.sm}px;
  `}
`;

export const H3 = styled.h3`
  font-size: ${fontSizes.xl.default}rem;
  font-weight: 600;
  color: ${themeVars.textColor};
  margin-bottom: ${spacing.md.default}px;
  
  ${media.md`
    font-size: ${fontSizes.lg.md}rem;
    margin-bottom: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    font-size: ${fontSizes.md.sm}rem;
    margin-bottom: ${spacing.sm.sm}px;
  `}
`;

// Alert component
export const Alert = styled.div`
  padding: ${spacing.md.default}px;
  border-radius: 4px;
  margin-bottom: ${spacing.md.default}px;
  background-color: ${props => {
    switch(props.type) {
      case 'error': return '#ffebee';
      case 'warning': return '#fff8e1';
      case 'success': return '#e8f5e9';
      case 'info':
      default: return '#e3f2fd';
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 'error': return '#c62828';
      case 'warning': return '#ff8f00';
      case 'success': return '#2e7d32';
      case 'info':
      default: return '#0277bd';
    }
  }};
  border-left: 4px solid ${props => {
    switch(props.type) {
      case 'error': return '#f44336';
      case 'warning': return '#ffc107';
      case 'success': return '#4caf50';
      case 'info':
      default: return '#2196f3';
    }
  }};
  
  ${media.md`
    padding: ${spacing.sm.md}px;
    margin-bottom: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    padding: ${spacing.sm.sm}px;
    margin-bottom: ${spacing.sm.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
  `}
`;

// Input component
export const Input = styled.input`
  width: 100%;
  padding: ${spacing.sm.default}px;
  border: 1px solid ${themeVars.borderColor};
  border-radius: 4px;
  background-color: ${props => props.theme === 'dark' ? '#444' : '#fff'};
  color: ${themeVars.textColor};
  font-size: ${fontSizes.md.default}rem;
  
  &:focus {
    outline: none;
    border-color: ${themeVars.primary};
    box-shadow: 0 0 0 2px ${`${themeVars.primary}33`};
  }
  
  ${media.md`
    padding: ${spacing.sm.md}px;
    font-size: ${fontSizes.sm.md}rem;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
  `}
`;