const UsersRepository = require('../../../repositories/UsersRepository');
const Show = require('./show');
const config = require('../../../config');

async function action(req, res, next) {
    try {
        await UsersRepository.update(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            categories: req.body.categories,
            avatar: config.baseUrl + '/' + req.file.path
        });
        await Show(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;