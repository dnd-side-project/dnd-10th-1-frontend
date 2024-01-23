type User = {
  userId: number
  id: number
  title: string
  body: string
}

const tempAPI = {
  getUsers: async (): Promise<User> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/5")
    const data = await res.json()

    return data
  },
}

export default tempAPI
