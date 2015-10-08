(function () {
function deliveredServ($http,link)
{
	 this.get_dDetails = function()
    {return $http.get(link+'/deliveredlist');
	}; 
}
angular
    .module('admin')
    .service('deliveredServ', deliveredServ);
})();