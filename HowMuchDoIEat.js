(

function(){
	angular.module("Food",[]).controller("DivController",DivController);
	 function DivController($scope){
		$scope.food="";

		$scope.count = function() {

			if(($scope.food).trim() =="")
			{
				$scope.msg = "Please Enter Food";
			}
			else {
				var foodArray = ($scope.food).split(",");

				if(foodArray.length>3)
				{
					$scope.msg = "Alot!";
				}
				else 
				{
					$scope.msg = "Enjoy!";
				}

			}
	    }
    }
}
)();