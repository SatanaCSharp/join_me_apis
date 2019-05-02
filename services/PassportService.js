const passport = require('passport');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook').Strategy;
const localStrategy = require('./service_stragegies/localStrategy');
const facebookStrategy = require('./service_stragegies/facebookStrategy');
passport.use('local', new LocalStrategy(localStrategy.credentials, localStrategy.handler));
passport.use('facebook', new FacebookStrategy(facebookStrategy.credentials, facebookStrategy.handler));