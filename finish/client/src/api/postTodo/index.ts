import axios from 'axios'

export const postTodo = async (data: any): Promise<void> => {
  try {
    await axios({
      method: 'POST',
      url: 'http://localhost:8080/api/add-todo',
      data
    })
  } catch (error) {
    throw new Error(error)
  }
}