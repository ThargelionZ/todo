/**
 * Created by mylesparker on 12/21/16.
 */

(function() {
    angular.module("todoApp", ["ui.router", "firebase", "ngMaterial", "ngStorage"])
        .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("todoList");
            //
            // Now set up the states
            $stateProvider
                .state("todoList", {
                    url: "/todoList",
                    template: "<todo-list></todo-list>"
                })
                .state("about", {
                    url: "/about",
                    template: "<about></about>"
                })
                .state("register", {
                    url: "/register",
                    template: "<register></register>"
                })
                .state("login", {
                    url: "/login",
                    template: "<login></login>"
                });
        });
})();
