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
    facebook: {
        FACEBOOK_APP_ID: '282189916002200',
        FACEBOOK_APP_SECRET: 'a924f9c3ccd684e3215476896e249c88',
    },
    google: {
        clientID: '102620030943-o0q7fn1j47d51u1bnrul7s05openht2p.apps.googleusercontent.com',
        clientSecret: 'OEaI6WNmouG2iM-zfXt0quxK',
    },
    emailSender: 'site.join.me@gmail.com',
    secret: 'join_me_secret_rfn11'
};
