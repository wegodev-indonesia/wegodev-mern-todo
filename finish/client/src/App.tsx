import React from 'react';

import Header from 'components/Header'
import TaskList from 'components/TaskList'
import Form from 'components/Form'

const App: React.FC = () => {
  return (
    <main className="container mx-auto max-w-lg p-4 box-border bg-darkPurple min-h-screen">
      <Header />
      <Form />
      <TaskList />
    </main>
  );
};

export default App
