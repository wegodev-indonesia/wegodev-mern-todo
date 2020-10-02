import React from 'react'
import classnames from 'classnames'
import { useMutation, useQueryCache } from 'react-query'

import { deleteTodo } from 'api/deleteTodo'
import { updateTodo } from 'api/updateTodo'

import TrashIcon from 'assets/svg/trash'
import ChecklistIcon from 'assets/svg/checklist'

type Props = {
  taskId: string,
  title: string,
  status: 'completed' | 'uncompleted'
}

const TaskCard: React.FC<Props> = ({ title, taskId, status }) => {
  const cache = useQueryCache()

  const [removeTodo] = useMutation(deleteTodo, {
    onSuccess: () => {
      cache.invalidateQueries('todos')
    }
  })

  const [checkTodo] = useMutation(updateTodo, {
    onSuccess: () => {
      cache.invalidateQueries('todos')
    }
  })

  const containerClass = classnames(
    [
      'flex',
      'justify-center',
      'box-border',
      'items-center',
      'rounded',
      'shadow-lg',
      'p-4',
      'mb-2'
    ].join(' '), {
    'bg-gray-300 bg-opacity-50': status === 'completed',
    'bg-white text-darkPurple': status === 'uncompleted'
  })

  const titleClass = classnames(
    [
      'flex-1',
      'text-sm',
      'subpixel-antialiased',
      'tracking-wide',
      'font-bold',
      'whitespace-normal',
      'truncate'
    ].join(' '), {
      'line-through': status === 'completed'
  })

  const checklistStyle = classnames('w-5 h-5', {
    'text-green-400': status === 'completed',
    'text-green-700': status === 'uncompleted'
  })

  const trashStyle = classnames('w-5 h-5 ml-4', {
    'text-red-400': status === 'completed',
    'text-red-700': status === 'uncompleted'
  })

  return (
    <div className={containerClass}>
      <p className={titleClass}>
        {title}
      </p>

    <div className="flex text-darkPurple">
      <span>
        <ChecklistIcon className={checklistStyle} onClick={() => checkTodo(taskId)} />
      </span>
      <span className={trashStyle}>
        <TrashIcon onClick={() => removeTodo(taskId)} />
      </span>
    </div>
  </div>
  )
}

export default TaskCard