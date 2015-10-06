(function () {
function PizDetailsServ($http){
	 this.getDetails = function()
	 {return $http.get('http://localhost:3000/pizza');
	 };
}
angular.module('user')
.service('PizDetailsServ',PizDetailsServ); 
})();