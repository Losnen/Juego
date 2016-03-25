var player = document.getElementById('player')
var enemy = document.getElementById('enemy')
var enemy1 = document.getElementById('enemy1')
var enemy2 = document.getElementById('enemy2')

function updateElement(element, incx, incy) {
  var x = Number(element.getAttribute('data-x')) + incx
  var y = Number(element.getAttribute('data-y')) + incy
  element.style.transform = 'translate('+ x +'px, '+ y +'px)'
  
  // Update HTML
  element.setAttribute('data-x', x)
  element.setAttribute('data-y', y)
}

window.addEventListener('keydown', function(e) {
  //console.log(e)
  if (e.keyCode == 39) // Dcha
    updateElement(player, +10, 0)
  else if (e.keyCode == 37) // Izq
    updateElement(player, -10, 0)
  else if (e.keyCode == 38) // Arriba
    updateElement(player, 0, -10)
  else if (e.keyCode == 40) // Abajo
    updateElement(player, 0, +10)  
})

function algorithmEnemy() {
  var player_x = Number(player.getAttribute('data-x'))
  var player_y = Number(player.getAttribute('data-y'))
  
  var enemy_x = Number(enemy.getAttribute('data-x'))
  var enemy_y = Number(enemy.getAttribute('data-y'))
  
  var incr_x = (player_x > enemy_x ? 1 : -1)
  var incr_y = (player_y > enemy_y ? 1 : -1)  
  
  updateElement(enemy, incr_x, incr_y)
}

function algorithmEnemy1() {
  var player_x = Number(player.getAttribute('data-x'))
  var player_y = Number(player.getAttribute('data-y'))
  
  var enemy_x = Math.random();
  var enemy_y = Math.random();
  var incr_x = (player_x > enemy_x ? 1 : -1)
  var incr_y = (player_y > enemy_y ? 1 : -1) 
  
  updateElement(enemy1, incr_x, incr_y)
}

function algorithmEnemy2() {
  var player_x = Number(player.getAttribute('data-x'))
  var player_y = Number(player.getAttribute('data-y'))
  
  var enemy_x = Number(enemy.getAttribute('data-x'))
  var enemy_y = Number(enemy.getAttribute('data-y'))
  
  var incr_x = (player_x > enemy_x ? -1 : 1)
  var incr_y = (player_y > enemy_y ? -1 : 1)  
  
  updateElement(enemy2, incr_x, incr_y)
}

function inicializar(element) {
  element.setAttribute('data-x', 0)
  element.setAttribute('data-y', 0)
  updateElement(element, 
                Math.floor(Math.random() * 800),
                Math.floor(Math.random() * 300))  
}

inicializar(player)
inicializar(enemy)
inicializar(enemy1)
inicializar(enemy2)

var id = setInterval(function() { 
  algorithmEnemy()
  //algorithmEnemy1()
  algorithmEnemy2()
}, 10) // Cada 0,1 segundo