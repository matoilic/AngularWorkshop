import sigma from 'linkurious';

function networkGraphDirective(networkGraphDelegate) {
  return {
    restrict: 'EA', // Can only be *E*lement or *A*ttribute
    link: link, 
    replace: true,
    template: '<div class="graph"></div>',
    scope: {
      graph: '=',
      name: '@' // If there are more than one visualizations on a page, there must be a name
    }
  };

  function link(scope, element, attrs) {
    // Copy the name param. 
    // We can't use scope.name directly, as it might
    // get updated by the controller and we couldn't 
    // unregister anymore.
    var name = scope.name || ''; 

    var sigmaInstance = new sigma({
      graph: scope.graph,
      container: element[0]
    });

    // Register the sigma instance with the control service, 
    // so we can control it from a controller. 
    networkGraphDelegate.register(name, sigmaInstance);

    scope.$on('$destroy', function(){
      // This is called when this directive's scope is destroyed.
      // Clean up stuff here (if needed)...
      networkGraphDelegate.unregister(name);
    });

  }
}

export default ['networkGraphDelegate', networkGraphDirective ];
