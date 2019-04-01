const User = require('../models/User');
const Event = require('../models/Event');

async function findEventsByTag(tag) {
    return await Event.find({tags: [tag]})
        .populate('address')
        .populate('user', 'firstName lastName');
}

async function findAdvisedEvents(user) {
    let events = [];
    for (let category of   user.categories) {
        for (let tag of category.tags) {
            let currentEvent = await findEventsByTag(tag);
            events.push(...currentEvent);
        }
    }
    return events;
}

async function show(userId) {
    const user = await User.findById(userId, '_id').populate('categories');
    const events = await findAdvisedEvents(user);
    return await events;
}

module.exports = {
    show
};