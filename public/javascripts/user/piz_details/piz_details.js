(function () {
function PizDetailsCtrl(PizDetailsServ){
	var vm = this;
	vm.details = PizDetailsServ.getDetails();
	vm.details.success(function (data) {
           vm.details = data;
           console.log("inside success");
           console.log("details: ",vm.details);
         });
}
angular.module('user')
	   .controller('PizDetailsCtrl',PizDetailsCtrl);
})();