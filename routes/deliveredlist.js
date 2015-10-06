var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mydb';

router.get('/', function (req, res, next) {

MongoClient.connect(url, function (err, db) {
  console.log("inside mongoclientconnect");
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    var collection = db.collection('orderdetails');
    collection.find({d_status:false}).toArray(function (err,result){
    	if(err)
    		console.log(err);
    	else if(result.length) {
    		console.log(result);
            res.send(result);
           
        }
    	else
    		{
                console.log("Not Found!!");
                res.send('nothing');

            }
    });
}
});

});
module.exports = router;