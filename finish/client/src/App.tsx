import React, { useState } from 'react'

import Header from 'components/Header'
import TaskList from 'components/TaskList'
import Form from 'components/Form'
import PlusButton from 'components/PlusButton'

import PlusIcon from 'assets/svg/plus'

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen">
      <Header />
      <TaskList />
      <Form inProp={showForm} onClose={() => setShowForm(false)} />
      <PlusButton onClick={() => setShowForm(!showForm)} />
    </main>
  );
};

export default App
