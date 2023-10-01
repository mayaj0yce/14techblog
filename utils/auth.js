// authorize user to continue session or force login
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = withAuth;