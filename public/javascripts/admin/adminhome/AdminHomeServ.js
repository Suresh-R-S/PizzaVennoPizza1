function AdminHomeServ($http)
{
   this.getDetails = function(){
    return $http.get('http://localhost:3000/viewdetails');
   }; 

   this.update_details = function(obj){
  
        return $http({
          method  : 'POST',
          url     : 'http://localhost:3000/delivery',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         });
        };
}

(function () {
angular
    .module('admin')
    .service('AdminHomeServ', AdminHomeServ);


})();