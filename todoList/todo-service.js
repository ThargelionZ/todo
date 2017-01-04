/**
 * Created by mylesparker on 1/3/17.
 */

(function() {
    angular.module("todoApp")
        .service("myService", listService);

    function listService() {
        var service = this;

        service.todoList = [
            {
                "name": "To begin, type a todo in the textbox."
            }
        ];
    }
})();

