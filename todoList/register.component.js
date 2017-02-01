/**
 * Created by mylesparker on 1/31/17.
 */

(function() {
    angular.module("todoApp")
        .component("register", {
            templateUrl: "todoList/register.template.html",
            controller: RegisterController,
            controllerAs: "vm"
        });

    function RegisterController(authService) {
        var vm = this;

        vm.user = {};

        vm.registerUser = function () {
            authService.registerUser(vm.user);
        }
    }
})();