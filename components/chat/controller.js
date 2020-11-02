const store = require('./store');

function getChats(userId) {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId));
  });
}

function addChat(users) {
  console.log(Array.isArray(users));
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      console.error('[chatController] No hay usuarios');
      return Promise.reject('Invalid user list');
    }
    const chat = {
      users,
    };
    console.log(chat);
    return resolve(store.add(chat));
  });
}

module.exports = {
  addChat,
  getChats,
};
