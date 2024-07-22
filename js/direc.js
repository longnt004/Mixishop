app.controller('myDirecCtrl', function ($scope,$http) {
    $scope.values = ["0đ - 100,00đ","100,000đ - 200,000đ","200,000đ - 300,000đ","300,000đ - 400,000đ","400,000đ - 500,000đ","500,000đ - 600,000đ"]
    $scope.getVal = function () {
        
    }
    $http.get("https://provinces.open-api.vn/api/?depth=2").then(function (response) {
        $scope.myData = response.data;
        console.log($scope.myData);
    });
});