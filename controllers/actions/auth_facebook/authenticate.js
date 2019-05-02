async function action(req, res) {
    try {
        console.log(req);
        res.send(await req.user);
    } catch (err) {
        res.sendStatus(400);
    }
}

module.exports = action;