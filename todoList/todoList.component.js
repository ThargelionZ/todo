/**
 * Created by mylesparker on 1/2/17.
 */

(function(){
    angular.module("todoApp")
        .component("todoList", {
            templateUrl: "todoList/todoList.template.html",
            controller: todoListFunction
        });

        function todoListFunction(myService, $mdToast) {
            var ctrl = this;

            ctrl.listOfLists = myService.listOfLists;

            ctrl.selected = 0;

            ctrl.isSelected = function (index) {
                if(index == ctrl.selected){
                    return true;
                } else {
                    return false;
                }
            };

            ctrl.addList = function (key) {
                ctrl.listOfLists = myService.listOfLists;

                if(key.keyCode == 13){
                    var input = $("#listInput").val();
                    if(input !== ""){
                        myService.addList(input);
                    } else {
                        $mdToast.showSimple("You can not add a list without a name!")
                    }
                    $("#listInput").val("");
                }
            };

            ctrl.removeList = function (index) {
                if(ctrl.listOfLists.length === (index + 1)){
                    ctrl.selected--;
                }
                $mdToast.showSimple("Removed list \"" + myService.listOfLists[index].listName + "\".");
                myService.removeList(index);
            };

            ctrl.clearAllLists = function () {

            };

            ctrl.editList = function (index) {
                var data = myService.listOfLists[index].listName;
                $("#listName" + (index + 1)).remove();
                $("#listOfListsItem" + (index + 1)).prepend("<input id='editListName' value= '" + data + "' maxlength='47'>");
                $("#editListName").focus();
                $("#editListName").select();

                $("#editListName").on("blur", function () {

                    var inputValue = $("#editListName").val();

                    if(inputValue !== ""){
                        $("#listOfListsItem" + (index + 1)).prepend("<span class='listName' id='listName" + (index + 1) + "'>" + inputValue + "</span>");
                        myService.editList(index, inputValue);
                    } else {
                        $("#listOfListsItem" + (index + 1)).prepend("<span class='listName' id='listName" + (index + 1) + "'>" + data + "</span>");
                    }

                    $("#editListName").remove();
                    $mdToast.showSimple("List \"" + data + "\" was changed to \"" + inputValue + "\".");
                });
            };

            ctrl.addListItem = function (key, index) {

                if(key.keyCode == 13){
                    var input = $("#todoInput").val();
                    if(input !== ""){
                        myService.addListItem(input, index);
                    } else {
                        $mdToast.showSimple("You can not add a list item without a name!")
                    }
                    $("#todoInput").val("");
                }
            };

            ctrl.removeListItem = function (index, parentIndex) {
                $mdToast.showSimple("Removed list item \"" + myService.listOfLists[parentIndex].listItems[index].name + "\" in list \"" + myService.listOfLists[parentIndex].listName + "\".");
                myService.removeListItem(index, parentIndex);
            };

            ctrl.clearAll = function (index) {
                ctrl.listOfLists[index].listItems = [];
                myService.clearAll(index);
                $mdToast.showSimple("Cleared all list items.");
            };

            ctrl.changeName = function(index, parentIndex) {
                if(myService.listOfLists[parentIndex].listItems[index].completed == false){
                    var data = myService.listOfLists[parentIndex].listItems[index].name;
                    $("#name" + (index + 1)).remove();
                    $("#listItem" + (index + 1)).prepend("<input id='editName' value= '" + data + "' maxlength='47'>");
                    $("#editName").focus();
                    $("#editName").select();

                    $("#editName").on("blur", function () {

                        var inputValue = $("#editName").val();

                        if(inputValue !== ""){
                            $("#listItem" + (index + 1)).prepend("<span class='name' id='name" + (index + 1) + "'>" + inputValue + "</span>");
                            myService.changeName(index, inputValue, parentIndex);
                        } else {
                            $("#listItem" + (index + 1)).prepend("<span class='name' id='name" + (index + 1) + "'>" + data + "</span>");
                        }

                        $("#editName").remove();
                        $mdToast.showSimple("Todo item \"" + data + "\" was changed to \"" + inputValue + "\".");
                    });
                }
            };

            ctrl.complete = function (index, parentIndex) {
                var completeBool = myService.listOfLists[parentIndex].listItems[index].completed;
                if(completeBool == false){
                    myService.markComplete(index, completeBool, parentIndex);
                } else {
                    myService.unmarkComplete(index, completeBool, parentIndex);
                }
            };

            ctrl.clearCompleted = function (index) {
                myService.clearCompleted(index);
                $mdToast.showSimple("Cleared all completed tasks.");
            };
        }
})();

