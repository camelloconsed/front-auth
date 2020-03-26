export default Error => {
  switch (Error) {
    case 'invalid_crentials':
      return 'Correo o contraseña invalida'
    case 'internal_error':
      return 'Error interno'
    default:
      return 'Error desconocido'
  }
}
