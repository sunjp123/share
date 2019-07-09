
const args = require('minimist')(process.argv.slice(2));
const pconfig = require('../config/pconfig')
var mongoose = require('mongoose'),
    DB_URL = `mongodb://${args.env=="development"?'localhost':(process.env.MONGOADMIN+':'+process.env.MONGOPWD+'@'+pconfig.HOST.MONGODB)}:27017/share`;

/**
 * 连接
 */
if(args.env=="development"){
    mongoose.connect(DB_URL);
}else{
    mongoose.connect(DB_URL,{ auth:{
        authdb: "admin",
        user: process.env.MONGOADMIN,
        password:process.env.MONGOPWD
    
    }});
}

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;