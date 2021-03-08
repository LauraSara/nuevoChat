const moment = require('moment');

function formatMessage(usuario, mensaje) {
  return {
    usuario,
    mensaje,
    time: moment().format('h:mm a')
  };
}


function paraSalir(id) {
  const login = users.findlogin(user => user.id === id);

  if (login !== -1) {
    return users.splice(login, 1)[0];
  }
}


module.exports = {
  formatMessage,
  paraSalir
}
