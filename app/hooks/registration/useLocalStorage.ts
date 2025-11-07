export function insertUser(data: string) {
  localStorage.setItem('user', data)
}

export function getUser() {
  const data = localStorage.getItem('user')
  return data ? JSON.parse(data) : null
}
