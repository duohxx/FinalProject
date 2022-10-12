var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*

*/
router.post('/register', function(req, res) {
  const {username, password} = req.body ;
  if(username === 'admin'){
    res.send({code: 1, msg: "This user are already exist!"});
  } else {
    res.send({code: 0, data: {id: 'abc123', username, password}});
  }
})

module.exports = router; 
 