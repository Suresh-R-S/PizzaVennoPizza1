(function () {
function deliveredCtrl(deliveredServ)
{
  var vm = this;
  vm.details = deliveredServ.get_dDetails();  
	vm.details.success(function (data) 
  {
		if(data === 'nothing') 
      {vm.details = {};
       window.alert('No orders to be delivered');
      }
    else 
      {vm.details = data;
      }
      });
}
angular.module('admin')
     .controller('deliveredCtrl',deliveredCtrl);
})();