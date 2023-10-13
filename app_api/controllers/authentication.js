const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
       return res
         .status(400)
         .json({"message": "All fields required"});
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save() // Use the promise returned by save()
        .then(() => {
            const token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        })
        .catch((err) => {
            res
                .status(400)
                .json(err);
        });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({"message": "All fields required"});
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log("Error:", err);
            return res
                .status(500) // Internal Server Error
                .json({ message: 'Internal server error' });
        }
        if (user) {
            const token = user.generateJwt();
            return res
                .status(200)
                .json({ token });
        } else {
            return res
                .status(401) // Unauthorized
                .json({ message: 'Unauthorized' });
        }
    })(req, res);
};


module.exports = {
    register,
    login
}
