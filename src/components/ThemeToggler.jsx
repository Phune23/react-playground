import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ToggleButton, Icon, Text } from '../styles/ThemeTogglerStyles';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleButton onClick={toggleTheme} theme={theme}>
      <Icon>{theme === 'dark' ? '🌙' : '☀️'}</Icon>
      <Text>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</Text>
    </ToggleButton>
  );
};

export default ThemeToggler;