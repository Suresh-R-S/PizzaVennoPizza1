(function () {
angular.module('user')
.service('serv', function (){
        var arr = [];
        var total = 0;
        var count = 0;
        var adname,adpwd;
        this.p1 = function(obj){
          arr.push(obj);
          console.log("After Pushing: ",arr);
          count = count+1;
          total = total + obj.cost;
          };
        this.p2 = function(){
           return arr; 
        };
        this.p3 = function(){
           return total; 
        };
        this.p4 = function(aname,apwd){
           console.log("inside P4");
           adname = aname;
           adpwd = apwd;
        };
        this.p5 = function(){
           console.log("inside P5");
           return adname;
        };
        this.p6 = function(){
          console.log("inside P6");
           return adpwd;
        };
       
       }); 
})();