(function () {
angular.module('user', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate' , 'admin']);

angular.module('user').config(function($routeProvider) {

    $routeProvider.
     when('/', 
     {templateUrl:'user/piz_details/piz_details.html',
	  controller: 'PizDetailsCtrl',
	  controllerAs:'vm'
	 }).
	 when('/cart', 
	 {templateUrl:'user/piz_cart/piz_cart.html',
	  controller:'PizCartCtrl',
	  controllerAs:'vm'
	 }).
	 when('/userdetails', 
	 {templateUrl:'user/userdetails/userdetails.html',
	  controller:'UserDetailsCtrl',
	  controllerAs:'vm'
	 }).
	 when('/pizza/:pName',
	 {templateUrl:'user/piz_page/piz_page.html',
	  controller:'PizPageCtrl',
	  controllerAs:'vm'
	 });
    /* Add New Routes Above */
});
})();