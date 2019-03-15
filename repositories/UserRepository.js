const User = require('../models/User');

async function findById(id) {
    return await User.findById(id, 'firstName lastName email').exec();
}

async function findByEmail(email) {
    return await User.find({email}, 'firstName lastName email').exec();
}

module.exports = {
    findById,
    findByEmail
};
