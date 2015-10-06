(function () {
function AdminLoginCtrl($location){
        var vm = this;
        vm.submit = function(){
        if((vm.obj.aname==="admin")&&(vm.obj.pwd==="admin"))
        { 
          $location.path('adminhome');
        }
       
        else{window.alert("Invalid username or password..Please try again!!");
            }
      };
  }
angular.module('admin')
.controller('AdminLoginCtrl',AdminLoginCtrl);  
  })();