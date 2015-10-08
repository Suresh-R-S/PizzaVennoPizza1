(function () {
function PizDetailsServ($http,link){
	 this.getDetails = function()
	 {return $http.get(link+'/pizza');
	 };
}
angular.module('user')
.service('PizDetailsServ',PizDetailsServ); 
})();