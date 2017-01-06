/**
 * Created by mylesparker on 1/3/17.
 */

(function() {
    angular.module("todoApp")
        .service("myService", listService);

    function listService() {
        var service = this;

        service.listOfLists = [
            {"listName": "myList",
                "listItems": []
            }
        ];

        service.addList = function () {
            service.listOfLists
        };

        service.removeList = function () {

        };

        service.clearAllLists = function () {

        };

        service.todoList = [];
        service.completedTasks = [];

        service.addListItem = function(input) {
            service.todoList.push({"name": input, "completed": false});
        };

        service.removeListItem = function (id) {
            var closeID = $("#close" + (id + 1));
            service.todoList.splice(id, 1);
            closeID.parent().remove();
        };

        service.clearAll = function () {
            service.todoList = [];
        };

        service.changeName = function (index, newName) {
            service.todoList[index].name = newName;
        };

        service.markComplete = function (index, bool) {
            if(!bool){
                service.todoList[index].completed = true;
            }
        };

        service.unmarkComplete = function (index, bool) {
            if(bool){
                service.todoList[index].completed = false;
            }
        }
    }
})();

