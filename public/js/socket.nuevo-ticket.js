// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

// Escuchar sucesos -> on
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});

socket.on('estadoActual', function(data) {
    console.log('data', data);
    label.text(data.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});