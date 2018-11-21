//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://abd:1234@cluster0-shard-00-00-j3tem.mongodb.net:27017,cluster0-shard-00-01-j3tem.mongodb.net:27017,cluster0-shard-00-02-j3tem.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;