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
                    templateUrl: "todoList/todo-list.html"
                })
                .state('about', {
                    url: "/about",
                    templateUrl: "todoList/about.html"
                });
        });
})();

$("#aboutHeading").on("click", function () {
    $("body").css("background-color", "tan");
});

$("#todoHeading").on("click", function () {
    $("body").css("background-color", "#c3f7ff");
});
