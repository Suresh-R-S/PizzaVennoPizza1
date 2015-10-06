(function () {
angular.module('admin', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);
angular.module('admin').config(function($routeProvider) {

    $routeProvider.
	when('/adminlogin',
	    {templateUrl:'admin/adminlogin/adminlogin.html',
		 controller:'AdminLoginCtrl',
		 controllerAs:'aCtrl'
		}).
    when('/adminhome',
        {templateUrl:'admin/adminhome/adminhome.html',
		 controller:'AdminHomeCtrl',
		 controllerAs:'ahCtrl'
		}).
    when('/delivered',
        {templateUrl:'admin/delivered/delivered.html',
		 controller:'deliveredCtrl',
		 controllerAs:'dlCtrl'
		});
    /* Add New Routes Above */

});
})();