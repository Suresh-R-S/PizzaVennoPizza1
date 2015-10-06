(function () {
function UserDetailsCtrl(UserDetailsServ,serv,$location){
        var vm = this;
        vm.submit = function() {
        var obj1 = serv.p2();
        console.log("Obj 1: ",obj1);
        var total = serv.p3();
        console.log("gtotal:",total);
        vm.obj.order=obj1;
        vm.obj.d_status= true;
        vm.added = UserDetailsServ.add_details(vm.obj);
        vm.added.success(function(data) {
          window.alert("Order Placed..Thank You!");
          $location.path('/');
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