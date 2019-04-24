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
    smtp: {
        service: 'gmail',
        auth: {
            user: 'site.join.me@gmail.com',
            pass: '13Swat13'
        }
    },
    emailSender: 'site.join.me@gmail.com',
    secret: 'join_me_secret_rfn11'
};
