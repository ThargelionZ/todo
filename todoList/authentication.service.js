/**
 * Created by mylesparker on 1/31/17.
 */

(function (){
    angular.module("todoApp")
        .service("authService", function ($firebaseAuth, $mdToast) {
            var self = this;

            self.registerUser = function (user) {
                if(user.email == null || user.password == null){
                    $mdToast.showSimple("Must enter all information correctly.")
                }
                $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password)
                    .then(function (firebaseUser) {
                        $mdToast.showSimple("User has been created: " + user.email);
                        $(".authItem").val("");
                    }).catch(function (error) {
                    $mdToast.showSimple(error.message);
                });
            };

            self.loginUser = function (email, password) {
                if(email == null || password == null){
                    $mdToast.showSimple("Must enter all information correctly.")
                }
                $firebaseAuth().$signInWithEmailAndPassword(email, password)
                    .then(function (firebaseUser) {
                        $mdToast.showSimple("User has been logged in!");
                        $(".authItem").val("");
                    }).catch(function (error) {
                    $mdToast.showSimple(error.message);
                })
            };

            self.googleLogin = function (provider) {
                firebase.auth().signInWithPopup(provider).then(function(result) {
                    var token = result.credential.accessToken;
                    console.log(token);
                    var user = result.user;
                    console.log(user);
                }).catch(function(error) {
                    var errorCode = error.code;
                    console.log(error.code);
                    var errorMessage = error.message;
                    console.log(error.message);
                    var email = error.email;
                    console.log(error.email);
                    var credential = error.credential;
                    console.log(error.credential);
                });
            };

            self.signOut = function () {
                firebase.auth().signOut().then(function () {
                    $mdToast("Sign out successful");
                    $(".authItem").val("");
                }, function(error) {
                    $mdToast(error);
                });
            };

            self.getCurrentUser = function (user) {
                if(user) {
                    console.log(user);
                } else {
                    console.log("No user is signed in.");
                }
            }

        })
})();