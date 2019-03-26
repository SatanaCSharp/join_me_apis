const User = require('../models/User');

async function findById(id) {
    return await User.findById(id, 'firstName lastName email').populate('categories', '_id name').exec();
}

async function update(userId, userData) {
    const user = await User.findById(userId, 'firstName lastName email').populate('categories', '_id name');
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.email = userData.email;
    user.categories = userData.categories;
    return await user.save();
}

async function findByEmail(email) {
    return await User.find({email}, 'firstName lastName email').exec();
}

module.exports = {
    findById,
    findByEmail,
    update
};
