const UserEventsRepository = require('../../../repositories/UserEventsRepository');

async function action(req, res) {
    try {
        res.send(await UserEventsRepository.getUserEvents(req.user.id));
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;