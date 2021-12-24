const apiCalls = {
  logIn(user) {
    console.log('fetch')
    return fetch('https://nails-by-rylee-server.herokuapp.com/login', {
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
