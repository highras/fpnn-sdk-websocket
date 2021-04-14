'use strict'

function FPError(code, error) {
    this.code = code;
    this.name = 'FPError';
    this.message = error.message || '';
    this.stack = error.stack;
    this.error = error
}

FPError.prototype = Object.create(Error.prototype);

FPError.prototype.toString = function() {
    return "code: " + this.code + " ex: " + this.message;
}

module.exports = FPError;