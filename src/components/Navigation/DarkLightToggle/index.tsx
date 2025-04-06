'use client';

// -> Imports -> Libraries
import { useEffect, useState } from 'react';

// -> Imports -> Components
import { Button } from '@/components/ui/button';

export const DarkLightToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(
    () =>
      isDarkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark'),
    [isDarkMode],
  );

  return (
    <Button variant="ghost" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light' : 'Dark'}
    </Button>
  );
};
