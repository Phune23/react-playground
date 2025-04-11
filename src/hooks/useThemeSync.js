import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useThemeSync = (code) => {
  const { theme } = useContext(ThemeContext);
  const [syncedCode, setSyncedCode] = useState(code);

  useEffect(() => {
    if (code.includes('ThemeContext')) {
      // Thay đổi theme mặc định trong code với theme hiện tại
      const updatedCode = code.replace(
        /const \[theme, setTheme\] = React\.useState\('(light|dark)'\);/,
        `const [theme, setTheme] = React.useState('${theme}');`
      );
      setSyncedCode(updatedCode);
    } else {
      setSyncedCode(code);
    }
  }, [code, theme]);

  return syncedCode;
};