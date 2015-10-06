(function () {
function UserDetailsServ($http) {

	this.add_details = function(obj){
	
        return $http({
          method  : 'POST',
          url     : 'http://localhost:3000/orderdetails',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         });
        };
}
angular.module('user')
.service('UserDetailsServ',UserDetailsServ);

})();