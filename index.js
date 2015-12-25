var ioEmitter= require('socket.io-emitter')


module.exports = function(options){
  console.log('SETTING UP THE IO ADAPTER');
  setTimeout(function(){
    console.log('TIMEOUT DONE');
    var io = ioEmitter( {host: options.host, port: options.port} );
    io.emit('someroom', 'bob');
    io.emit('alive', 'bob');
    io.emit('alive', 'bob');
    io.emit('alive', 'bob');
    io.emit('alive', 'bob');
    return io;
  }, 5000);
};