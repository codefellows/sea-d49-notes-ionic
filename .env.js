var os = require('os');
var ifaces = os.networkInterfaces();
var local = ifaces.wlp3s0[0].address;

module.exports = {
  SERVER_ADDRESS: local + ':3000'
};
