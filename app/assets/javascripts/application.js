// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
console.log("jquery ready!");
});

    function mostrar() {
        div = document.getElementById('flotante');
        div.style.display = '';
    }

function view_element(hidded, view_action) {
    div = document.getElementById(hidded);
    div.style.display = '';
    obj = document.getElementById(view_action);
    obj.style.visibility = 'hidden';


}

function cerrar() {
    div = document.getElementById('flotante');
    div.style.display = 'none';
}
