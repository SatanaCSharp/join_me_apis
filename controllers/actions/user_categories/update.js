const UserCategoriesRepository = require('../../../repositories/UserCategoriesRepository');

async function action(req, res) {
    try {
        await UserCategoriesRepository.update(req.params.id, {
            categories: req.body.categories
        });
    } catch (err) {
        res.sendStatus(500);
    }
}