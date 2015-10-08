(function () {
function AdminLoginCtrl($location){
        var vm = this;
        vm.obj = {};
        vm.sta = false;
        vm.submit = function(){
        if((vm.obj.aname==="admin")&&(vm.obj.pwd==="admin"))
        { 
          $location.path('adminhome');
        }
       
        else{
          vm.sta = true;
          vm.obj = {};
        }
      };
  }
angular.module('admin')
.controller('AdminLoginCtrl',AdminLoginCtrl);  
  })();