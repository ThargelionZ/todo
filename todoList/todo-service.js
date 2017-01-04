/**
 * Created by mylesparker on 1/3/17.
 */

(function() {
    angular.module("todoApp")
        .service("myService", listService);

    function listService() {
        var service = this;

        service.todoList = [];
        service.completedTasks = [];

        service.addListItem = function(input) {
            service.todoList.push({"name": input});
        };

        service.removeListItem = function (id) {
            var closeID = $("#close" + (id + 1));
            service.todoList.splice(id, 1);
            closeID.parent().remove();
        };
    }
})();

