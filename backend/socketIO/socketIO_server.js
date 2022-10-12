const {ChatModel} = require('../db/models')
module.exports = function (server) {
  const io = require('socket.io')(server)

  // Monitor the client connection to the server
  io.on('connection', function (socket) {
    console.log('There is a client connected to the server')

    // Bind the listener to receive messages sent by the client
    socket.on('sendMsg', function ({from, to, content}) {
      console.log('The server receives the message sent by the client', {from, to, content})
      // Processing data (saving messages)
      // Obtain the data related to the chatMsg object
      const chat_id = [from, to].sort().join('_')// from_to or to_from
      const create_time = Date.now()
      new ChatModel({from, to, content, chat_id, create_time}).save(function (error, chatMsg) {
        // Send messages to all connected clients
        io.emit('receiveMsg', chatMsg)
      })
    })
  })
}