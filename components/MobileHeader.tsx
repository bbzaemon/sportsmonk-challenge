import * as React from 'react';
import { SidebarTrigger } from './ui/sidebar';
import Logo from './Logo';

interface IMobileHeaderProps {
}

const MobileHeader: React.FunctionComponent<IMobileHeaderProps> = (props) => {
  return (
    <header className="sticky top-0 z-10 w-full bg-card shadow">
      {/* backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary */}
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SidebarTrigger />
          <Logo/>
        </div>
        {/* <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
          <UserNav />
        </div> */}
      </div>
    </header>
  );
};

export default MobileHeader;
