/**
 * Created by mylesparker on 12/21/16.
 */
(function() {
    angular.module("todoApp", ["ui.router"])
        .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("todoList");
            //
            // Now set up the states
            $stateProvider
                .state('todoList', {
                    url: "/todoList",
                    template: "<todo-list></todo-list>"
                })
                .state('about', {
                    url: "/about",
                    template: "<about></about>"
                });
        });
})();


