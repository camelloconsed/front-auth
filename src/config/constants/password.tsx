export default {
    EMAIL_STATUS: {
        NONE: 0,
        SUCCESS: 1,
        ERROR: 2,
        WAITING: 3,
    },
    EMAIL_ERROR: {
        ACCOUNT_NOT_FOUND: {
            CODE: 'not_found',
            MESSAGE: 'No existe una cuenta asociada a ese correo'
        },
        ACCOUNT_DELETED: {
            CODE: 'account_deleted',
            MESSAGE: 'La cuenta no está habilitada para reiniciar la contraseña'
        },
        INTERNAL_ERROR: {
            CODE: 'internal_error',
            MESSAGE: 'Error de conexión, porfavor intente más tarde'
        }
    }
}
