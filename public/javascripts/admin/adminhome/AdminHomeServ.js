function AdminHomeServ($http,link)
{
   this.getDetails = function(){
    return $http.get(link+'/viewdetails');
   }; 

   this.update_details = function(obj){
  
        return $http({
          method  : 'POST',
          url     : link+'/delivery',
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