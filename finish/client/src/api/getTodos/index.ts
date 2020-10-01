import axios from 'axios'

import { Todos } from 'types/todos.type'

export const getTodos = async (): Promise<Todos> => {
  try {
    const res = await axios.get('http://localhost:8080/api/todos')

    return res.data
  } catch (error) {
    throw new Error(error)
  }
}