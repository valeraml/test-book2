/* http://jsxgraph.uni-bayreuth.de/wiki/index.php/Archimedean_spiral */
/* Accessed January 2017                                             */

/*
var board = JXG.JSXGraph.initBoard('jsxgbox', {boundingbox: [-10, 10, 10, -10]});
var a = board.create('slider', [[1,8],[5,8],[0,1,4]], {name:'a'});
var b = board.create('slider', [[1,9],[5,9],[0,0.25,4]], {name:'b'});

var c = board.create('curve', 
                    [function(phi){ return a.Value()+b.Value()*phi; }, [0, 0], 0, 8*Math.PI],
                    {curveType:'polar', strokewidth:4}
);
var g = board.create('glider',  [c]);
var t = board.create('tangent', [g], {dash:2, strokeColor:'#a612a9'});
var n = board.create('normal',  [g], {dash:2, strokeColor:'#a612a9'});
*/


/*works
var board = JXG.JSXGraph.initBoard('jsxgbox',{
    boundingbox:  [-5,5,5,-5],
    axis: true
});
var slider = board.create('slider', [[-3, 4], [3, 4], [0, 0, 2*2*Math.PI]]);
      
      // Create a point on the circle
var circle = board.create('circle', [[0, 0], 3]);
var point = board.create('glider', [function() {
        return 3*Math.cos(slider.Value());
      }, function() {
        return 3*Math.sin(slider.Value());
      }, circle], {name: 'P'});
*/

/*

var board = JXG.JSXGraph.initBoard('jsxgbox', {
    boundingbox: [-1, 1, 10, -1],
    axis: true
  });
  
  // Create a slider for controlling the position
  var slider = board.create('slider', [[0, -0.5], [9, -0.5], [0, 9, 5]]);
  
  // Create a line
  var line = board.create('line', [[0, 0], [9, 0]]);
  
  // Create tick marks along the line
  for (var i = 1; i <= 8; i++) {
    var tick = board.create('point', [i, 0], {visible: false});
    board.create('ticks', [line, tick], {drawLabels: true, label: {offset: [0, -10]}});
  }
  
  // Create a point on the line
  var point = board.create('glider', [function() {
    return slider.Value();
  }, 0, line], {name: 'P'});

  */

  var board = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-1, 10, 10, -1],
    axis: true
  });
  
  // Create input boxes for initial velocity and angle
  var initialVelocityInput = document.createElement('input');
  initialVelocityInput.setAttribute('type', 'number');
  initialVelocityInput.setAttribute('placeholder', 'Initial velocity');
  initialVelocityInput.setAttribute('id', 'initial-velocity-input');
  document.body.appendChild(initialVelocityInput);
  
  var angleInput = document.createElement('input');
  angleInput.setAttribute('type', 'number');
  angleInput.setAttribute('placeholder', 'Launch angle');
  angleInput.setAttribute('id', 'angle-input');
  document.body.appendChild(angleInput);
  
  // Create a button to launch the projectile
  var launchButton = document.createElement('button');
  launchButton.innerHTML = 'Launch';
  launchButton.onclick = launchProjectile;
  document.body.appendChild(launchButton);
  
  // Create a slider for controlling time
  var slider = board.create('slider', [[0, 9], [9, 9], [0, 5, 10]]);
  
  // Function to launch the projectile
  function launchProjectile() {
    var initialVelocity = parseFloat(document.getElementById('initial-velocity-input').value);
    var launchAngle = parseFloat(document.getElementById('angle-input').value);
    
    var radianAngle = launchAngle * Math.PI / 180; // Convert to radians
    var g = 9.8; // Acceleration due to gravity
    
    // Calculate the x and y coordinates of the projectile
    var x = initialVelocity * Math.cos(radianAngle) * slider.Value();
    var y = initialVelocity * Math.sin(radianAngle) * slider.Value() - 0.5 * g * Math.pow(slider.Value(), 2);
    
    // Update the position of the point
    point.setPosition(JXG.COORDS_BY_USER, [x, y]);
  }
  
  // Create a point representing the projectile
  var point = board.create('point', [0, 0], {name: 'Projectile'});


