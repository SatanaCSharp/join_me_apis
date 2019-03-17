const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/User');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await User.findOne({email}).exec();
            if (!user) {
                return done(null, false, {
                    error: {
                        message: 'Incorrect email'
                    }
                })
            }
            if (!user.validatePassword(password)) {
                return done(null, false, {
                    error: {
                        message: 'Incorrect password'
                    }
                })
            }
            return done(null, user)
        } catch (err) {
            return done(err)
        }
    }
));