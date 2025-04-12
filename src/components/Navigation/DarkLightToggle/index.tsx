'use client';

// -> Imports -> Libraries
import { useEffect, useState } from 'react';

// -> Imports -> Components
import { Button } from '@/components/ui/button';
import { Brackets, Lightbulb, LightbulbOff, Rss } from 'lucide-react';
import Link from 'next/link';

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
      <Link href="/rss.xml" target="_blank">
        <Button variant="ghost">
          <Rss className="text-[#f26522]" />
        </Button>
      </Link>
      <Link href="/posts.json" target="_blank">
        <Button variant="ghost">
          <Brackets />
        </Button>
      </Link>
    </div>
  );
};
