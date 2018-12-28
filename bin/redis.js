const redis = require("redis");
const CONFIG =  require('../config/redisConfig')
const client = redis.createClient(CONFIG.port, CONFIG.host);

exports.set = (key,value,expire)=>{
    client.set(key,value,(...args)=>{
        console.log('reids ret='+args)
    })
    client.expire(key,expire,(...args)=>{
        console.log('reids expire='+args)
    })
}

exports.get = (key,callback)=>{
    return new Promise((resolve)=>{
        client.get(key,(err,reply)=>{
            const ret = {err,value:reply&&reply.toString()}
            console.log('reids get='+JSON.stringify(ret))
            resolve(ret)
            callback&&callback(ret)
        })
    })
    
}
