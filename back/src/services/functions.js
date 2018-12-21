exports.success = (result) => {
    return {
        'status': 'success',
        'result': result
    }
}

exports.error = (message) => {
    return {
        'status': 'error',
        'message': message
    }
}

exports.isErr = (obj) => {
    return obj instanceof Error
}

exports.checkAndReturn = (obj) => {
    return this.isErr(obj) ? this.error(obj.message) : this.success(obj)
}