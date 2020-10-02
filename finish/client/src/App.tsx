import React, { useState } from 'react'

import Header from 'components/Header'
import TaskList from 'components/TaskList'
import Form from 'components/Form'

import PlusIcon from 'assets/svg/plus'

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen">
      <Header />
      <TaskList />
      <Form inProp={showForm} onClose={() => setShowForm(false)} />
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: '50%',
          bottom: '10%'
        }}
        onClick={() => setShowForm(!showForm)}>
        <PlusIcon
          className="w-10 h-10 text-white"
        />
      </div>
    </main>
  );
};

export default App
