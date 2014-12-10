function DeathrayMenuController($scope) {
	$scope.menuState.show = false;

	$scope.toggleMenu = function() {
		$scope.menuState.show = !$scope.menuState.show;
	}

	// Death ray functions left as exercise to reader
}