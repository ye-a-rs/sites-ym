export default {
  login(identity, password) {
    return fetch('http://127.0.0.1:3000/api/login', {
      method: 'POST',
      body: {
        identity: identity,
        password: password
      }
    });
  }
}