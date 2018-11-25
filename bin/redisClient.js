const redis = require("redis");
const CONFIG =  require('../config/redisConfig')
const client = redis.createClient(CONFIG.port, CONFIG.host);
exports.client  = _ => redis.createClient(CONFIG.port, CONFIG.host);

exports.publish = (key,event,content)=>{
    client.zadd(key,Math.random(),()=>{
        console.log('2312312')
        client.publish(event,typeof content == 'object'?JSON.stringify(content):content)
    })
}