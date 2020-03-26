import errorCodes from './errorCodes'

export default Error => {
  switch (Error) {
    case errorCodes.INVALID_CREDENTIALS:
      return 'Correo o contraseña incorrecta'
    case errorCodes.INTERNAL_ERROR:
      return 'Error interno del servidor, porfavor intente nuevamente'
    default:
      return 'Error de conexión, porfavor intente más tarde'
  }
}
