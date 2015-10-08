(function () {
function PizDetailsCtrl(PizDetailsServ,serv){
	var vm = this;

  vm.interval = 3000;
  vm.isCollapsed = true;
  vm.details = PizDetailsServ.getDetails();
	vm.details.success(function (data) {
           vm.details = data;
           console.log("inside success");
           console.log("details: ",vm.details);
         });
  vm.test = function(pizza) 
  {
    var obj = {};
    obj.p_name = pizza.p_name;
    console.log("Pizzaname:",obj.p_name)
    obj.rate = pizza.rate;
    obj.qty = vm.obj.qty;
    obj.cost = pizza.rate * obj.qty;
    serv.p1(obj);
    console.log("P2:",serv.p2());
  };
}
angular.module('user')
	   .controller('PizDetailsCtrl',PizDetailsCtrl);
})();