angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  // DEBUG data
  $scope.items = [
    { title: 'Derpus', desc: 'A derpus zerpus from kurpuz' },
    { title: 'Zerpus', desc: 'The best show in the verse.', logo: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' }
  ];
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
