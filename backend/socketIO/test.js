module.exports = function (server) {
  const io = require('socket.io')(server)

  // Monitor client-server connections
  io.on('connection', function (socket) {
    console.log('One user has connect the server')

    // Bind listener, receive messages sent by clients
    socket.on('sendMsg', function (data) {
      console.log('The server has received the info send from user', data)

      data.name = data.name.toUpperCase()

      io.emit('receiveMsg', data)
      console.log('server send message to user', data)
    })
  })
}