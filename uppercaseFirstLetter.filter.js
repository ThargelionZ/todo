/**
 * Created by mylesparker on 2/2/17.
 */

(function () {
    angular.module("todoApp")
        .filter("uppercaseFirstLetter", function() {

        // Create the return function
        // set the required parameter name to **number**
        return function(input) {
            input = input.split(" ");
            for(var i = 0; i < input.length; i++){
                input[i] = input[i].toLowerCase();
                console.log(input[i]);
                input[i] = input[i].charAt(0).toUpperCase() + input[i].substr(1);
            }
            input = input.join(" ");
            return input;
        }
    });
})();
