(function () {
function PizPageCtrl($routeParams,$http,serv,PizDetailsServ){
        var vm = this;
        vm.name = $routeParams.pName;
        vm.details = PizDetailsServ.getDetails();
        vm.details.success(function(data) {
          vm.pizzadetail = data.filter(function(entry){
            return entry.p_name === vm.name;
          })[0];

          vm.test = function() {
          var obj = {};

           obj.p_name = vm.pizzadetail.p_name;
           obj.rate = vm.pizzadetail.rate;
           obj.qty = vm.obj.qty;
           obj.cost = obj.rate * obj.qty;
           serv.p1(obj);
           console.log("P2:",serv.p2());
          };

        });
}
angular.module('user')
       .controller('PizPageCtrl',PizPageCtrl);
})();