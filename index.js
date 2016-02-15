var ioEmitter= require('socket.io-emitter')


module.exports = function(options){
  var dataSource = options.dataSource;
  setTimeout(function(){
    var io = ioEmitter( {host: dataSource.host, port: dataSource.port} );
    io.emit('someroom', 'bob');
    io.emit('alive', 'bob');
    io.emit('alive', 'bob');
    io.emit('alive', 'bob');
    io.emit('alive', 'bob');
    return io;
  }, 5000);
};