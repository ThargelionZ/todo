/**
 * Created by mylesparker on 2/2/17.
 */

(function () {
    angular.module("todoApp")
        .controller("IndexController", function(authService) {
            var vm = this;

            vm.user = firebase.auth().currentUser;

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    vm.user = user;
                } else {
                    console.log("No user is signed in.");
                    vm.user = null;
                }
            });

            vm.signOut = authService.signOut;
        });
})();