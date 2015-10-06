(function () {
function deliveredServ($http)
{
	 this.get_dDetails = function()
    {return $http.get('http://localhost:3000/deliveredlist');
	}; 
}
angular
    .module('admin')
    .service('deliveredServ', deliveredServ);
})();