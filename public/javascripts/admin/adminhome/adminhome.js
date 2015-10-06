(function () {
function AdminHomeCtrl(AdminHomeServ){
    var vm = this;
    vm.details = AdminHomeServ.getDetails();  
	  vm.details.success(function (data) {
		if(data === 'nothing') 
    {vm.details = {};
     window.alert('No more orders');
    }
    else 
    {vm.details = data;
    }
    });

	 vm.deliver = function(id)
   {vm.dummy = {};
    vm.dummy.Id = id;
    console.log("dummy Object: ",vm.dummy);
    vm.details1 = AdminHomeServ.update_details(vm.dummy);
    console.log("Updated return: ",vm.details1);
    vm.details1.success(function(data){
      window.alert("delivered..");
      if (data.errors) {
        // Showing errors.
        /*$scope.errorName = data.errors.name;
        $scope.errorUserName = data.errors.username;
        $scope.errorEmail = data.errors.email;*/
        vm.errorName = data.errors.name;
        vm.errorUserName = data.errors.username;
        vm.errorEmail = data.errors.email;
        } 
      });
        
        vm.details = AdminHomeServ.getDetails(); 
	    vm.details.success(function (data) {
            console.log("vm.details:",data);
            if(data === 'nothing') 
            {vm.details = {};
             window.alert('No more orders');
            }
            else 
            {vm.details = data;
            }

        });
  };
}
angular.module('admin')
     .controller('AdminHomeCtrl',AdminHomeCtrl);
})();


