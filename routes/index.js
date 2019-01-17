var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.con;
  var data = "";
  db.query('SELECT * FROM sampleTable',(err,rows)=>{
    if(err){
      console.log(err);
    }    
    res.render('index', { title: '投資',print:rows });
    console.log(rows);
  })
});

module.exports = router;
