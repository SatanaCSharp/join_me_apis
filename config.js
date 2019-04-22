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
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "90fcbd1a11cf8d",
            pass: "c287aabbe0cf29"
        }
    },
    emailSender: 'join.me-5a0f06@inbox.mailtrap.io',
    secret: 'join_me_secret_rfn11'
};
