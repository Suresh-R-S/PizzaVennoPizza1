(function () {
angular.module('user', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate' , 'admin']);

angular.module('user').config(function($routeProvider) {

    $routeProvider.
     when('/', 
     {templateUrl:'user/piz_details/piz_details.html',
	  controller: 'PizDetailsCtrl',
	  controllerAs:'pCtrl'
	 }).
	 when('/cart', 
	 {templateUrl:'user/piz_cart/piz_cart.html',
	  controller:'PizCartCtrl',
	  controllerAs:'cCtrl'
	 }).
	 when('/userdetails', 
	 {templateUrl:'user/userdetails/userdetails.html',
	  controller:'UserDetailsCtrl',
	  controllerAs:'uCtrl'
	 }).
	 when('/pizza/:pName',
	 {templateUrl:'user/piz_page/piz_page.html',
	  controller:'PizPageCtrl',
	  controllerAs:'ppCtrl'
	 });
    /* Add New Routes Above */
});
})();