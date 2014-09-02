function MainController($scope) {

 $scope.demo = "Hello";
 $scope.people = [];
 $scope.domains = [];

 _.times(10, function () {
    $scope.people.push({name: Faker.Name.findName(), email: Faker.Internet.email()});
 });
 console.log($scope.people);

 _.times(10, function () {

    $scope.domains.push({name: Faker.Internet.domainWord()});
 });



$scope.addPerson = function (person) {
  $scope.people.push(person);
  $scope.newPerson = {};
};


}
