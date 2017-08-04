angular.module('starter.controllers', [])

.controller('DriversCtrl', function($scope) {})

.controller('MapCtrl', function($scope, $ionicModal, $state, NgMap) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    ctrl = this;

    $ionicModal.fromTemplateUrl('templates/showBuses.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    ctrl.myEvent = function() {
        $scope.modal.show();
    };

})




.controller('SignInCtrl', function($scope, $state) {
    ctrl = this;
    ctrl.signInFunc = function() {
        $state.go("tab.map");
    }
})

.controller('ProfileCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
}) 