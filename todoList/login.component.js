/**
 * Created by mylesparker on 1/31/17.
 */

(function () {
    angular.module("todoApp")
        .component("login", {
            templateUrl: "todoList/login.template.html",
            controller: LoginController,
            controllerAs: "vm"
        });

    function LoginController(authService) {
        var vm = this;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user);
            } else {
                console.log("No one is signed in.");
            }
            vm.user = user;
        });

        vm.email = null;
        vm.password = null;

        vm.user = firebase.auth().currentUser;
        vm.provider = new firebase.auth.GoogleAuthProvider();

        vm.login = function () {
            authService.loginUser(vm.email, vm.password);
            vm.user = firebase.auth().currentUser;
        };

        vm.googleLogin = function () {
            authService.googleLogin(vm.provider);
            vm.user = firebase.auth().currentUser;
        };


        vm.signOut = function () {
            authService.signOut();
            vm.user = null;
        };

        vm.getCurrentUser = function() {
            authService.getCurrentUser(vm.user);
            vm.user = firebase.auth().currentUser;
        };

    }
})();