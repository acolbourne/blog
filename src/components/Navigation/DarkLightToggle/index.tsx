'use client';

// -> Imports -> Libraries
import { useEffect, useState } from 'react';

// -> Imports -> Components
import { Button } from '@/components/ui/button';
import { Lightbulb, LightbulbOff } from 'lucide-react';

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
    <div id="DarkLightToggle">
      <Button variant="ghost" onClick={toggleDarkMode}>
        {isDarkMode ? <Lightbulb /> : <LightbulbOff />}
      </Button>
    </div>
  );
};
