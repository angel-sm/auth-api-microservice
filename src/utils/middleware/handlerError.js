import { _config } from '../../config';
import boom from '@hapi/boom';

// return all stack error or just error
function withErrorStack(error, stack) {
    if (_config.env) {
        return { error, stack };
    }
    return error;
}

function logErrors(err, req, res, next) {
    next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
    res.status(err.status || 500);
    res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
    logErrors,
    errorHandler
};