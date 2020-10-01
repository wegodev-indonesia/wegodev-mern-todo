import axios from 'axios'

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    axios({
      method: 'DELETE',
      url: `http://localhost:8080/api/remove-todo/${id}`
    })
  } catch (error) {
    throw new Error(error)
  }
}