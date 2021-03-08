const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const session = require("express-session")
const flash = require("connect-flash")
const formatMessage = require('./message');

//dos mas

const botName = 'DojoBot';


app.get('/', function(req, res){
  res.sendFile(__dirname+ '/chat.html');
});



http.listen(8000, function(){
  console.log('servidor en el puerto 8000');
});

io.on('connection', function(socket){
  console.log('un usuario se ha conectado');

  let usuario;

  socket.on('NuevoUsuario', function(data){
    usuario = data;
  });

  socket.on('msgNuevo', function(data){


    socket.broadcast.emit('msg', {
      usuario : usuario,
      msg: data
    });

    socket.emit('msg', {
      usuario : usuario,
      msg: data
    });
  });
});
