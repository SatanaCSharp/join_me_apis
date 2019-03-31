const User = require('../models/User');
const Event = require('../models/Event');

async function show(userId) {
    const user = await User.findById(userId, '_id').populate('categories');
    const events = [];
    await user.categories.forEach(function (category) {
        category.tags.forEach(function (tag) {
            events.push(Event.find({tags: [tag]}).exec());
        });
    });
    console.log(events);
    return await events;
}


module.exports = {
    show
};