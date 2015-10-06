var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mydb';

router.post('/', function (req, res, next) {
MongoClient.connect(url, function (err, db) {
  console.log("inside mongoclientconnect");
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    var collection = db.collection('orderdetails');
    var content = req.body;
    var o_id = new mongodb.ObjectID(content.Id);
    console.log("Contact no js file:",o_id);

    collection.update( {"_id":o_id}, {$set: {"d_status": false } },function(err, results) {
      console.log("Update: ",results);
   });
}
});

});
module.exports = router;