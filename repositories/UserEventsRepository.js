const Event = require('../models/Event');

const getUserEvents = async (userId) => await Event.find({'user': userId}).exec();

module.exports = {
    getUserEvents
};