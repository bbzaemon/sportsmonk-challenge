'use client'

import * as React from 'react';
import { SidebarTrigger } from './ui/sidebar';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';

interface IMobileHeaderProps {
}

const MobileHeader: React.FunctionComponent<IMobileHeaderProps> = (props) => {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return;
  }
  return (
    <header className="sticky top-0 z-10 w-full bg-card shadow">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SidebarTrigger />
          <Logo/>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
