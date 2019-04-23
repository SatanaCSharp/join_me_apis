const EmailService = require('../../../services/EmailService');
const UserRepository = require('../../../repositories/UsersRepository');

async function action(req, res) {
    try {
        const userEmails = await UserRepository.getUserEmailsByEventTags(req.body.tags);
        const user = await UserRepository.findById(req.user.id);
        const emailData = await {
            to: userEmails.join(', '),
            subject: 'There is new event for you!',
            text: '',
            eventData: {
                name: req.body.name,
                description: req.body.description,
                dateTime: req.body.dateTime,
                user: user,
                address: req.address,
            }
        };
        await EmailService.sendEmail(emailData);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = action;