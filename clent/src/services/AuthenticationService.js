import Api from "./Api";

export default {
  register (credentials) {
    return Api().post('register', credentials);
  }
};

// AuthenticationService.register({
//   email: 'rest@gmail.com',
//   password: '123456'
// })
