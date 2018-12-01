const { client } = require('./redisClient')
const { REDIS_MESSAGE } = require('../config/constConfig')
module.exports = (socketServer)=>{

    socketServer.on('connect',(socket)=>{

        const redis = client()
        
        redis.on('ready',()=>{
            redis.subscribe(REDIS_MESSAGE.SHARE_MESSAGE.EVENT)
        }) 
        //监听订阅成功事件
        redis.on("subscribe", function (channel, count) {
            console.log("client subscribed to " + channel + "," + count + "total subscriptions");
        });

        //收到消息后执行回调，message是redis发布的消息
        redis.on("message", function (channel, message) {

            socket.emit(REDIS_MESSAGE.SHARE_MESSAGE.EVENT,message)
        });

        //监听取消订阅事件
        redis.on("unsubscribe", function (channel, count) {
            console.log("client unsubscribed from" + channel + ", " + count + " total subscriptions")
        });

        socket.on('disconnect',()=>{
            if(redis){
                redis.end(true)
            }
        })
        
    })
}