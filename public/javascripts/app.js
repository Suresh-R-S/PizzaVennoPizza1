(function () {
angular.module('pvp', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'user', 'admin']);

angular.module('pvp').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});

angular.module('pvp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});
})();