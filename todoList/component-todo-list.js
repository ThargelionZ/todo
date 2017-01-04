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


        }
})();

