(function () {
function UserDetailsServ($http,link) {

	this.add_details = function(obj){
	
        return $http({
          method  : 'POST',
          url     : link+'/orderdetails',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         });
        };
}
angular.module('user')
.service('UserDetailsServ',UserDetailsServ);

})();