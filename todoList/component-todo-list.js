/**
 * Created by mylesparker on 1/2/17.
 */
(function(){
    angular.module("todoApp")
        .component("todo-list", {
            templateUrl: "todoList/todo-list.html",
            controller: todoListFunction
        });

        function todoListFunction(myService) {
            var ctrl = this;

            ctrl.todoLists = myService.todoList;
        }
})();

