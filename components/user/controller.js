const store = require('./store');

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error('[messageController] No hay nombre');
      return Promise.reject('Invalid name');
    }
    const data = {
      name,
    };
    return resolve(store.add(data));
  });
}

function getUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

module.exports = {
  addUser,
  getUsers,
};
