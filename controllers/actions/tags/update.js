const TagsRepository = require('../../../repositories/TagsRepository');
const Index = require('./index');

async function action(req, res) {
    try {
        await TagsRepository.update(req.params.id, {
            name: req.body.name
        });
        await Index(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;