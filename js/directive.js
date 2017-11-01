angular.module('TodoDirective',[]).directive('todoTable', function() {
	return {
		restrict: 'EA',	// EA -> You can have E for element, A for attribute or EA for element/attribute.
		templateUrl: templates/directives/todo-table.html
	};
});