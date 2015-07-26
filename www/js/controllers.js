angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Pod) {
  // DEBUG data
  $scope.items = [
    { title: 'Stuff You Should Know',
      desc: 'How do landfills work? How do mosquitos work? Join Josh and Chuck as they explore the Stuff You Should Know about everything from genes to the Galapagos in this podcast from HowStuffWorks.com.',
      logo: 'http://podcasts.howstuffworks.com/hsw/podcasts/sysk/sysk-audio-1600.jpg',
      url: 'http://feeds.feedburner.com/RoderickOnTheLine' },
    { title: 'Roderick on the Line',
      desc: 'Merlin Mann\'s frank &amp; candid weekly phone call with John Roderick of The Long Winters',
      logo: 'http://static1.1.sqspcdn.com/static/f/512802/25771902/1418614615047/rotl-logo-300-sq.jpg?token=%2FCaFS9Zl%2BAKombN7PtgMF0xFZiQ%3D',
      url: 'https://feeds.feedburner.com/RoderickOnTheLine' }
  ];

  $scope.importPodkicker = function() {
    navigator.startApp.check('com.podkicker', function() {
      navigator.startApp.start([['com.podkicker', 'com.podkicker.Podkicker']], function() {
      }, function(err) {
          console.error('Failed to start Podkicker');
      });
    }, function(err) {
      console.error('Failed to find Podkicker app on your phone...');
    });
  };

  $scope.add = function(url) {
    Pod.add(url);
  };
})

.controller('ChatsCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('AccountCtrl', function($scope) {

});
