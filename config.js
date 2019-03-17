module.exports = {
    server: {
        host: '127.0.0.1',
        port: 4000
    },

    baseUrl: 'http://localhost:4000',

    db: {
        mongo: {
            url: 'mongodb://localhost:27017/join_me'
        },
    },

    auth: {
        tokenLifetime: 7200000
    },

    headers: {
        authToken: 'auth-token'
    },

    secret: 'join_me_secret_rfn11'
};
