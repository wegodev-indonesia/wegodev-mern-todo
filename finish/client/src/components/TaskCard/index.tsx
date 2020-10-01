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
      'px-2',
      'py-4',
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
      'tracking-normal',
      'leading-normal',
      'font-bold',
      'whitespace-normal',
      'truncate'
    ].join(' '), {
      'line-through': status === 'completed'
    })

  return (
    <div className={containerClass}>
      <p className={titleClass}>
        {title}
      </p>

    <div className="flex text-darkPurple">
      <span>
        <ChecklistIcon onClick={() => checkTodo(taskId)} />
      </span>
      <span className="ml-4">
        <TrashIcon onClick={() => removeTodo(taskId)} />
      </span>
    </div>
  </div>
  )
}

export default TaskCard