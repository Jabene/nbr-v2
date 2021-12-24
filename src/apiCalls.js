const apiCalls = {
  logIn(user) {
    return fetch('https://nails-by-rylee-server.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  register(user) {
    return fetch('https://nails-by-rylee-server.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}

export default apiCalls
