import styled from 'styled-components';
import { media, spacing, fontSizes, themeVars } from './responsive';

export const SelectorContainer = styled.div`
  margin-bottom: ${spacing.lg.default}px;
  
  ${media.md`
    margin-bottom: ${spacing.md.md}px;
  `}
  
  ${media.sm`
    margin-bottom: ${spacing.sm.sm}px;
  `}
`;

export const SelectorTitle = styled.h3`
  color: ${themeVars.textColor};
  margin-bottom: ${spacing.md.default}px;
  font-size: ${fontSizes.lg.default}rem;
  
  ${media.md`
    margin-bottom: ${spacing.sm.md}px;
    font-size: ${fontSizes.md.md}rem;
  `}
  
  ${media.sm`
    margin-bottom: ${spacing.sm.sm}px;
    font-size: ${fontSizes.md.sm}rem;
  `}
`;

export const TopicList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm.default}px;
  margin-bottom: ${spacing.md.default}px;
  
  ${media.md`
    gap: ${spacing.xs.md}px;
    margin-bottom: ${spacing.md.md}px;
  `}
  
  ${media.sm`
    gap: ${spacing.xs.sm}px;
    margin-bottom: ${spacing.sm.sm}px;
  `}
  
  ${media.xs`
    gap: ${spacing.sm.xs}px;
    margin-bottom: ${spacing.md.xs}px;
    // Thay đổi layout để các button nằm theo hàng dọc
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export const TopicButton = styled.button`
  padding: ${spacing.xs.default}px ${spacing.md.default}px;
  background-color: ${props => props.active ? themeVars.primary : themeVars.buttonBg};
  color: ${props => props.active ? 'white' : themeVars.buttonColor};
  border: 1px solid ${props => props.active ? themeVars.primary : themeVars.borderColor};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-hover)' : themeVars.buttonHover};
  }
  
  ${media.md`
    padding: ${spacing.xs.md}px ${spacing.sm.md}px;
    font-size: ${fontSizes.sm.md}rem;
  `}
  
  ${media.sm`
    padding: ${spacing.xs.sm}px ${spacing.sm.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
  `}
  
  ${media.xs`
    padding: ${spacing.xs.xs}px ${spacing.sm.xs}px;
    font-size: ${fontSizes.md.xs}rem;
    min-height: 42px; // Đảm bảo chiều cao tối thiểu cho touch
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const DescriptionBox = styled.div`
  background-color: ${themeVars.panelBg};
  color: ${themeVars.textColor};
  padding: ${spacing.md.default}px;
  border-radius: 6px;
  margin-bottom: ${spacing.md.default}px;
  border: 1px solid ${themeVars.borderColor};
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  line-height: 1.5;
  
  ${media.md`
    padding: ${spacing.sm.md}px;
    font-size: ${fontSizes.md.md}rem;
    margin-bottom: ${spacing.sm.md}px;
  `}
  
  ${media.sm`
    padding: ${spacing.sm.sm}px;
    font-size: ${fontSizes.sm.sm}rem;
    margin-bottom: ${spacing.sm.sm}px;
  `}
`;

export const LessonStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${fontSizes.xs.default}rem;
  color: ${themeVars.secondary};
  margin-top: ${spacing.sm.default}px;
  
  ${media.sm`
    font-size: ${fontSizes.xs.sm}rem;
    flex-direction: column;
    gap: ${spacing.xs.sm}px;
  `}
`;

export const LessonTag = styled.span`
  background-color: ${themeVars.panelBg};
  color: ${themeVars.textColor};
  border: 1px solid ${themeVars.borderColor};
  border-radius: 12px;
  padding: ${spacing.xs.default}px ${spacing.sm.default}px;
  font-size: ${fontSizes.xs.default}rem;
  display: inline-block;
  margin-right: ${spacing.xs.default}px;
  
  ${media.sm`
    font-size: ${fontSizes.xs.sm}rem;
    padding: ${spacing.xs.sm}px ${spacing.xs.sm}px;
  `}
`;