import styled from 'styled-components';
import { media, spacing, fontSizes } from './responsive';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xs.default}px ${spacing.md.default}px;
  border-radius: 20px;
  transition: all 0.3s ease;
  background-color: ${props => props.theme === 'dark' ? '#4da6ff' : '#0066cc'};
  color: white;
  border: none;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    background-color: ${props => props.theme === 'dark' ? '#6bb5ff' : '#0055bb'};
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
    border-radius: 50%;
    padding: ${spacing.xs.xs}px;
    width: 42px; // Tăng kích thước
    height: 42px; // Tăng kích thước
    justify-content: center;
    font-size: ${fontSizes.md.xs}rem;
  `}
`;

export const Icon = styled.span`
  margin-right: ${spacing.xs.default}px;
  font-size: ${fontSizes.md.default}rem;
  
  ${media.sm`
    font-size: ${fontSizes.sm.sm}rem;
  `}
  
  ${media.xs`
    margin-right: 0;
    font-size: ${fontSizes.lg.xs}rem; // Tăng kích thước icon
  `}
`;

export const Text = styled.span`
  ${media.xs`
    display: none; /* Ẩn text trên màn hình nhỏ, chỉ hiện icon */
  `}
`;