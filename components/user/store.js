const Model = require('./model');

function addUser(user) {
  const myUser = new Model(user);
  myUser.save();
  return myUser;
}

async function getUsers(filterUser) {
  let filter = {};
  if (filterUser) {
    filter = { name: filterUser };
  }
  const users = await Model.find(filter);
  return users;
}

module.exports = {
  add: addUser,
  list: getUsers,
};
