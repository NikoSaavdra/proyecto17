// Importar jQuery utilizando la sintaxis de módulos ES6
import $ from 'jquery';

// Esperamos que el DOM esté listo
$(document).ready(function() {
  // Asignar la acción de clic al botón
  $('#boton').click(function() {
    alert("¡Haz hecho clic en el botón!");
  });
});


document.getElementById('boton').onclick = function() {
    alert('Me ha presionado... me voy de vacaciones a relajarme');
}

console.log('Hola mundo... tercera vez');
