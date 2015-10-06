var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mydb';

router.post('/', function (req, res, next) {
MongoClient.connect(url, function (err, db) {
    var content = req.body;
  console.log("content: "+content);  
  console.log("inside mongoclientconnect");
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    var collection = db.collection('orderdetails');
    collection.insert(content,function (err,result){
    	if(err)
    		{console.log(err);
             res.send("ERROR!!!");
        }        
    	else
    		{
                console.log('Inserted ');
                res.send("successfully inserted");   
                db.close();
                

            }
            
    });
}
});

});
module.exports = router;