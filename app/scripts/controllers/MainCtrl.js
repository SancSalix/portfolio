(function() {
  function MainCtrl($scope, Fixtures) {

    this.selectProject = Fixtures.studies;
    this.posts = Fixtures.blog;

    this.testing = function(input) {
      console.log("hello");
      console.log(input);
    }




  }

  angular
    .module('portfolio')
    .controller('MainCtrl', ['$scope', 'Fixtures', MainCtrl]);
})();
