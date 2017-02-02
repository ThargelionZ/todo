/**
 * Created by mylesparker on 1/31/17.
 */

(function (){
    angular.module("todoApp")
        .service("authService", function ($firebaseAuth, $mdToast) {
            var self = this;

            self.$onInit = function () {
                var userId = firebase.auth().currentUser.uid;
                return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
                    var username = snapshot.val().username;
                    console.log(username);
                });
            };

            self.writeUserData = function (username, uid) {
              firebase.database().ref("users/" + uid).set({
                  username: username,
                  uid: uid
              });
            };

            self.registerUser = function (user) {
                if(user.email == null || user.password == null){
                    $mdToast.showSimple("Must enter all information correctly.");
                }
                $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password)
                    .then(function (firebaseUser) {
                        $mdToast.showSimple("User has been created: " + user.email);
                        self.writeUserData(firebaseUser.email, firebaseUser.uid);
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
                        $mdToast.showSimple(firebaseUser.email + " has been logged in!");
                        $(".authItem").val("");
                        $(".authItem").html("");
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
                    $mdToast.showSimple("Sign Out was successful.");
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