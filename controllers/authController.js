const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (req, res) => {
    const { username, password, name, lastname } = req.body;
    try {
        const user = await User.findByUsername(username);
        if (user) return res.status(400).send('Username already exists');

        const hashedPassword = bcrypt.hashSync(password, 8);
        await User.create(username, hashedPassword, name, lastname);
        res.status(201).send('User registered');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByUsername(username);
        if (!user) return res.status(400).send('User not found');

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id_user }, process.env.SECRET_KEY, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { register, login };
