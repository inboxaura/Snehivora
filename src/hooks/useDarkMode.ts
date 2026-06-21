import { useState, useEffect, useCallback } from 'react';

export function useDarkMode() {
  const [isDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggle = useCallback(() => {
    // No-op
  }, []);

  return { isDark, toggle };
}
