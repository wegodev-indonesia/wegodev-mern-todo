import React from 'react'

type Props = {
  title: string
}

const TaskCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="rounded bg-white shadow-lg px-4 py-4 mb-2 box-border">
      <p className="text-sm subpixel-antialiased tracking-normal leading-normal text-darkPurple font-bold whitespace-normal truncate">
        {title}
      </p>
    </div>
  )
}

export default TaskCard