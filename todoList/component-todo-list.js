/**
 * Created by mylesparker on 1/2/17.
 */
(function(){
    angular.module("todoApp")
        .component("todoList", {
            templateUrl: "todoList/todo-list.html",
            controller: todoListFunction
        });

        function todoListFunction(myService) {
            var ctrl = this;

            ctrl.todoLists = myService.todoList;

            ctrl.addListItem = function (key) {
                ctrl.todoLists = myService.todoList;

                if(key.keyCode == 13){
                    var input = $("#todoInput").val();
                    if(input !== ""){
                        myService.addListItem(input);
                    }
                    $("#todoInput").val("");
                }
            };

            ctrl.removeListItem = function (id) {
                myService.removeListItem(id);
            };

            ctrl.clearAll = function () {
                ctrl.todoLists = [];
                myService.clearAll();
            };

            ctrl.changeName = function(index) {
                var data = myService.todoList[index].name;
                $("#name" + (index + 1)).remove();
                $("#listItem" + (index + 1)).prepend("<input id='editName' value= '" + data + "' maxlength='50'>");
                $("#editName").focus();
                $("#editName").select();

                $("#editName").on("blur", function () {

                    //TODO Make sure to catch the bug with deleting a list item while the edit view is open

                    var inputValue = $("#editName").val();

                    console.log(inputValue);
                    console.log($("#editName").val());

                    if(inputValue !== ""){
                        $("#listItem" + (index + 1)).prepend("<span class='name' id='name" + (index + 1) + "'>" + inputValue + "</span>");
                        myService.changeName(index, inputValue);
                    } else {
                        $("#listItem" + (index + 1)).prepend("<span class='name' id='name" + (index + 1) + "'>" + data + "</span>");
                    }

                    console.log(myService.todoList);

                    $("#editName").remove();
                });
            };

            ctrl.completeBool = myService.todoLis;

            ctrl.complete = function (index) {
                var completeBool = myService.todoList[index].completed;
                if(completeBool == false){
                    console.log(myService.todoList);
                    $("#name" + (index + 1)).css("text-decoration", "line-through");
                    $("#name" + (index + 1)).css("color", "#d9d9d9");
                    myService.markComplete(index, completeBool);
                } else {
                    console.log(myService.todoList);
                    $("#name" + (index + 1)).css("text-decoration", "none");
                    $("#name" + (index + 1)).css("color", "black");
                    myService.unmarkComplete(index, completeBool);
                }
            }
        }
})();

