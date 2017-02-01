/**
 * Created by mylesparker on 1/31/17.
 */

(function (){
    angular.module("todoApp")
        .service("authService", function ($firebaseAuth) {
            var self = this;

            self.registerUser = function (user) {
                $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password)
                    .then(function (firebaseUser) {
                        console.log("User has been created: " + firebaseUser.uid);
                    }).catch(function (error) {
                    console.log(error);
                })
            };

            self.loginUser = function (email, password) {
                $firebaseAuth().$signInWithEmailAndPassword(email, password)
                    .then(function (firebaseUser) {
                        console.log("User has been logged in!" + firebaseUser);
                        $(".authItem").val("");
                    }).catch(function (error) {
                    console.log("User has not been registered. " + error);
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
                    console.log("Sign out successful");
                }, function(error) {
                    console.log(error);
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