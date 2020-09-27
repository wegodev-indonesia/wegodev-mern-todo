import React from 'react';

import Header from 'components/Header'
import TaskCard from 'components/TaskCard'

const App: React.FC = () => {
  return (
    <main className="container mx-auto max-w-lg p-4 box-border bg-darkPurple min-h-screen">
      <Header />
      <TaskCard title="Hehehehehe, hello gaessssss" />
    </main>
  );
};

export default App
