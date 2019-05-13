const User = require('../models/User');
const Category = require('../models/Category');

const findById = async (id) => await User.findById(id, 'firstName lastName email avatar').populate('categories', '_id name').exec();
const findByEmail = async (email) => await User.find({email}, 'firstName lastName email avatar').exec();

async function update(userId, userData) {
    const user = await User.findById(userId, 'firstName lastName email avatar').populate('categories', '_id name');
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.email = userData.email;
    user.categories = userData.categories;
    user.avatar = userData.avatar;
    return await user.save();
}

async function getUserEmailsByEventTags(tags) {
    const categories = await Category.find({'tags': {$in: tags}});
    return await User.find({'categories': {$in: categories}}, 'email');
}

async function socialFindOrCreate(social, profile) {
    const userSocial = await User.find({'social': social.id}, 'firstName lastName email avatar');
    if (userSocial.length !== 0) {
        return userSocial;
    }

    const user = new User({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        social: profile.id,
        avatar: profile.photos[0].value
    });
    await user.save();
    return {user: user.authJSON()};
}

module.exports = {
    findById,
    findByEmail,
    update,
    getUserEmailsByEventTags,
    socialFindOrCreate
};
