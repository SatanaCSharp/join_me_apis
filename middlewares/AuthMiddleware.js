const jwt = require('express-jwt');
const secret = require('../config').secret;

const getHeadersToken = (req) => {
    const {headers: {authorization}} = req;
    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null
};
const auth = {
    required: jwt({
        secret,
        getToken: getHeadersToken
    }),
    optional: jwt({
        secret,
        getToken: getHeadersToken,
        credentialsRequired: false
    })
};

module.exports = auth;