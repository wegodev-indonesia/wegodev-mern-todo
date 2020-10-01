import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryCache } from 'react-query'

import { postTodo } from 'api/postTodo'

type Inputs = {
  title: string,
  status: 'completed' | 'uncompleted'
}

const Form = () => {
  const cache = useQueryCache()

  const { register, handleSubmit, errors, reset } = useForm<Inputs>()
  const [mutate] = useMutation(postTodo, {
    onSuccess: () => {
      cache.invalidateQueries('todos')
    }
  })

  // React-Hook-Form
  const onSubmit = async (data: Inputs): Promise<void> => {
    try {
      await mutate(data)
      reset()
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-2">
      <input name="title" placeholder="test" ref={register({ required: true, maxLength: 10 })} />
      {errors.title && <span className="text-white">This field is required!</span>}

      <input name="status" defaultValue="uncompleted" ref={register} className="hidden" />

      <input type="submit" />
    </form>
  )
}

export default Form