const EventsRepository = require('../../../repositories/EventsRepository');
const Index = require('./index');
const storeAddress = require('../address/store');
const EmailService = require('../../../services/EmailService');

async function action(req, res) {
    try {
        const address = await storeAddress(req, res);
        await EventsRepository.store({
            name: req.body.name,
            description: req.body.description,
            dateTime: req.body.dateTime,
            user: req.user.id,
            tags: req.body.tags,
            address: address['_id']
        });
        
        await EmailService.sendEmail();
        await Index(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;