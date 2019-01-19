const args = require('minimist')(process.argv.slice(2));
const pconfig = require('./pconfig')
module.exports = {
    port:"6379",
    host:args.env == 'development'?"127.0.0.1":pconfig.HOST.REDIS
}