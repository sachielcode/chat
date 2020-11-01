const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    store.add(fullMessage);
    return resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      return reject('Invalid Data');
    }
    const result = await store.update(id, message);
    resolve(result);
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
