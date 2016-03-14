var ioEmitter= require('socket.io-emitter')
console.log('here')
var io = ioEmitter( { host: '192.168.59.103', port: 10000 } );


message.sendActivityDirect = function(channel, data, options, cb){
  activityDb = appResources[options.appName].activityDb;
  //var fullChannel = prefix + '#' + this.nsp.name + '#' + room + '#';
  var fullChannel =  'zefti#' + '/' + '#' + channel + '#';
  var encodedData = msgpack.encode(data);
  activityDb.publish(fullChannel, encodedData, function(err, result){
    cb(err, result);
  });

};
