import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-main min-h-screen w-full">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-primary-light border-t-accent rounded-full animate-spin"></div>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-primary-dark tracking-wider uppercase">
          Sahaj Exports
        </h2>
      </div>
    </div>
  );
};

export default PageLoader;
