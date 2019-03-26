const UsersRepository = require('../../../repositories/UsersRepository');

async function action(req, res) {
    try {
        await UsersRepository.update(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            categories: req.body.categories
        });
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;