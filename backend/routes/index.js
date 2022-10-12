var express = require('express');
var router = express.Router();

const md5 = require('blueimp-md5')
const {UserModel, ChatModel} = require('../db/models')
const filter = {password: 0, __v: 0} // Specifies the attributes to filter

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// Registered Routes
router.post('/register', function (req, res) {
  // Read the request parameter data
  const {username, password, type} = req.body
  // Solution: Check whether the user exists. If yes, an error message is displayed. If no, save the fault
  UserModel.findOne({username}, function (err, user) {
    if(user) {
      // An error message is displayed
      res.send({code: 1, msg: 'This user already exists'})
    } else {
      new UserModel({username, type, password:md5(password)}).save(function (error, user) {

        res.cookie('userid', user._id, {maxAge: 1000*60*60*24})
        const data = {username, type, _id: user._id}
        res.send({code: 0, data})
      })
    }
  })
  // Return response data
})

// Route to login
router.post('/login', function (req, res) {
  const {username, password} = req.body
  UserModel.findOne({username, password:md5(password)}, filter, function (err, user) {
    if(user) { // login success
      res.cookie('userid', user._id, {maxAge: 1000*60*60*24})
      res.send({code: 0, data: user})
    } else {
      res.send({code: 1, msg: 'The user name or password is incorrect!'})
    }
  })
})

// Update the route of user information
router.post('/update', function (req, res) {
  const userid = req.cookies.userid
  // If no, a prompt message is displayed
  if(!userid) {
    return res.send({code: 1, msg: 'Please login first'})
  }
  // Yes, update the corresponding user document data based on userID
  // Get the submitted user data
  const user = req.body // 没有_id
  UserModel.findByIdAndUpdate({_id: userid}, user, function (error, oldUser) {

    if(!oldUser) {
      res.clearCookie('userid')
      res.send({code: 1, msg: 'Please login first'})
    } else {
      const {_id, username, type} = oldUser
      const data = Object.assign({_id, username, type}, user)
      res.send({code: 0, data})
    }
  })
})

router.get('/user', function (req, res) {
  const userid = req.cookies.userid
  if(!userid) {
    return res.send({code: 1, msg: 'Please login first'})
  }
  UserModel.findOne({_id: userid}, filter, function (error, user) {
    if(user) {
      res.send({code: 0, data: user})
    } else {
      res.clearCookie('userid')
      res.send({code: 1, msg: 'Please login first'})
    }

  })
})

// Get a list of users (by type)
router.get('/userlist', function (req, res) {
  const {type} = req.query
  UserModel.find({type}, filter, function (error, users) {
    res.send({code: 0, data: users})
  })
})

/*
Gets a list of all relevant chat messages for the current user
 */
router.get('/msglist', function (req, res) {
  const userid = req.cookies.userid
  UserModel.find(function (err, userDocs) {

    const users = userDocs.reduce((users, user) => {
      users[user._id] = {username: user.username, header: user.header}
      return users
    } , {})
    /*
      Query all chat information related to userID
      Parameter 1: indicates the query conditions
      Parameter 2: indicates the filtering criteria
      Parameter 3: Callback function
    */
    ChatModel.find({'$or': [{from: userid}, {to: userid}]}, filter, function (err, chatMsgs) {
      // Returns data containing all chat messages related to all users and the current user
      res.send({code: 0, data: {users, chatMsgs}})
    })
  })
})

/*
Modifies a specified message as read
 */
router.post('/readmsg', function (req, res) {
  // 得到请求中的from和to
  const from = req.body.from
  const to = req.cookies.userid
  /*
  Update chat data in database
  Parameter 1: query condition
  Parameter 2: Update to the specified data object
  Parameter 3: Whether to update multiple items at a time, only one update by default
  Parameter 4: callback function for update completion
   */
  ChatModel.update({from, to, read: false}, {read: true}, {multi: true}, function (err, doc) {
    console.log('/readmsg', doc)
    res.send({code: 0, data: doc.nModified}) 
  })
})

module.exports = router;
