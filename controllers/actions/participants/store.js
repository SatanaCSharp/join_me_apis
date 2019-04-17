const ParticipantsRepository = require('../../../repositories/ParticipantsRepository');
const index = require('./index');

async function action(req, res) {
    try {
        console.log(req.body.user);
        console.log(req.user.id);
        await ParticipantsRepository.store({
            user: req.user.id,
            event: req.body.event
        });
        index(req, res);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = action;