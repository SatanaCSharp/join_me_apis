const User = require('../../../models/User');
const config = require('../../../config');

function signUp(req, res) {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar: `${config.baseUrl}/uploads/default_avatar.png`
    });

    user.setPassword(req.body.password);

    user.save().then(() => {
        return res.json({user: user.authJSON()});
    }).catch(err => res.sendStatus(500));
}

module.exports = signUp;
