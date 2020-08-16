import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
 
export const DarkModeToggler = () => {
  const addThemeBodyClass = (isDark) => {
    if (process.browser) {
      const hasDarkClass = document.documentElement.classList.contains('is-dark');

      if (hasDarkClass) {
        if (isDark) return;
        document.documentElement.classList.remove('is-dark');
      }

      if (isDark) document.documentElement.classList.add('is-dark');
    }
  };

  const getDefaultValue = () => {
    if (process.browser) {
      const isDark = localStorage.getItem('isDarkMode') === 'true';
      addThemeBodyClass(isDark);
      return isDark || false;
    }

    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(() => getDefaultValue());
  
  return (
    <DarkModeToggle
      speed={5}
      onChange={val => {
        if (process.browser) {
          localStorage.setItem('isDarkMode', val);
          addThemeBodyClass(val);
        }
        setIsDarkMode(val);
      }}
      checked={isDarkMode}
      size={80}
    />
  );
};
