(function () {
function PizCartCtrl(serv){
  var vm = this;
  vm.showtab = true;
  vm.details = serv.p2();
  if(!vm.details)
  {
  	vm.showtab = false;
  }
    console.log("Cart Details: ",vm.details);
      vm.total = serv.p3();
      console.log("Total: ",vm.total);
  
}

angular.module('user')
.controller('PizCartCtrl',PizCartCtrl);

})();