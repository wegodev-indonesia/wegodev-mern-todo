import React from 'react';

import LogoSvgComponent from './assets/svg/logo';

const App: React.FC = () => {
  return (
    <>
      <nav className="fixed px-1 py-3 bg-darkPurple w-full flex justify-center items-center shadow-xl box-border">
        <p className="font-display text-4xl text-red-600 subpixel-antialiased tracking-normal leading-normal font-bold whitespace-normal truncate">
          <LogoSvgComponent />
        </p>
      </nav>
      <main className="container mx-auto max-w-lg p-4 pt-24 box-border bg-darkPurple min-h-screen">
        <div className="rounded bg-white shadow-lg px-4 py-4 mb-2 box-border">
          <p className="text-sm subpixel-antialiased tracking-normal leading-normal text-darkPurple font-bold whitespace-normal truncate">
            Ini todo nih wkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwwkwk
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
