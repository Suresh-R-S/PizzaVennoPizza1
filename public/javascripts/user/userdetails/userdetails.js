(function () {
function UserDetailsCtrl(UserDetailsServ,serv,$location){
        var vm = this;
        vm.sta = false;
        vm.submit = function() {
        var obj1 = serv.p2();
        console.log("Obj 1: ",obj1);
        var total = serv.p3();
        console.log("gtotal:",total);
        vm.obj.order=obj1;
        vm.obj.d_status= true;
        vm.added = UserDetailsServ.add_details(vm.obj);
        serv.p7();
        vm.added.success(function(data) {
        vm.sta = true;
            if (data.errors) {
              // Showing errors.
              vm.errorName = data.errors.name;
              vm.errorUserName = data.errors.username;
              vm.errorEmail = data.errors.email;
            } 
          });
        };
      }

angular.module('user')
.controller('UserDetailsCtrl',UserDetailsCtrl);
})();