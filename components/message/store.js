const db = require('mongoose');
const Model = require('./model');

db.set('useFindAndModify', false);

require('dotenv').config();
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
//mongodb+srv://sachielcode:<password>@cluster0.krnza.mongodb.net/<dbname>?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
console.log('[db] Conectada con éxito');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateText,
  //get
  //update
  //delete
};
