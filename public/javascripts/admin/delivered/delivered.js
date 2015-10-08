(function () {
function deliveredCtrl(deliveredServ)
{
  var vm = this;
  vm.showtab = true;
  vm.details = deliveredServ.get_dDetails();  
	vm.details.success(function (data) 
  {
		if(data === 'nothing') 
      {vm.details = {};
       vm.showtab = false;
      }
    else 
      {vm.details = data;
      }
      });
}
angular.module('admin')
     .controller('deliveredCtrl',deliveredCtrl);
})();