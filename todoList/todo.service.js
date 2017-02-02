/**
 * Created by mylesparker on 1/3/17.
 */

(function() {
    angular.module("todoApp")
        .service("myService", listService);

    function listService($mdToast) {
        var service = this;

        service.listOfLists = [];

        service.addList = function (input) {
            service.listOfLists.push({"listName": input, "listItems": []});
            $mdToast.showSimple("The list \"" + input + "\" was added.");
        };

        service.removeList = function (index) {
            var closeID = $("#closeList" + (index + 1));
            service.listOfLists.splice(index, 1);
            closeID.parent().remove();
        };

        service.clearAllLists = function () {

        };

        service.editList = function (index, newName) {
            service.listOfLists[index].listName = newName;
        };

        service.todoList = [];

        service.addListItem = function(input, index) {
            service.listOfLists[index].listItems.push({"name": input, "completed": false});
            $mdToast.showSimple("The list item \"" + input + "\" was added to list \"" + service.listOfLists[index].listName + "\".")
        };

        service.removeListItem = function (index, parentIndex) {
            var closeID = $("#close" + (index + 1));
            service.listOfLists[parentIndex].listItems.splice(index, 1);
            closeID.parent().remove();
        };

        service.clearAll = function (index) {
            service.listOfLists[index].listItems = [];
        };

        service.changeName = function (index, newName, parentIndex) {
            service.listOfLists[parentIndex].listItems[index].name = newName;
        };

        service.markComplete = function (index, bool, parentIndex) {
            if(!bool){
                service.listOfLists[parentIndex].listItems[index].completed = true;
                $mdToast.showSimple("\"" + service.listOfLists[parentIndex].listItems[index].name + "\" was marked as complete.");
            }
        };

        service.unmarkComplete = function (index, bool, parentIndex) {
            if(bool){
                service.listOfLists[parentIndex].listItems[index].completed = false;
                $mdToast.showSimple("\"" + service.listOfLists[parentIndex].listItems[index].name + "\" was marked as incomplete.");
            }
        };

        service.clearCompleted = function (index) {
            var temp = -1;
            for(var i = 0; i < service.listOfLists[index].listItems.length; i++){
                temp++;
                if(service.listOfLists[index].listItems[i].completed == true){
                    service.listOfLists[index].listItems.splice(i, 1);
                    $("#listItem" + (temp + 1)).remove();
                    i--;
                }

            }
        }
    }
})();

