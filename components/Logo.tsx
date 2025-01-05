import * as React from 'react';

interface ILogoProps {
}

const Logo: React.FunctionComponent<ILogoProps> = () => {
  return (
    <h1 className="text-xl font-thin italic m-auto">
             <span className="text-white font-bold">FOOTBALL</span>
             <span className="text-primary">SHURU</span>
           </h1>
  );
};

export default Logo;
