const UserDB = require("../models/userDB");

// @desc    Add User(Register)
// @route   POST /api/user/register
// @access  Public
exports.addUser = async (req, res) => {
    const { name, email, password } = req.body;
    UserDB.findOne({ email: email }, (err, user) => {
        if (user) {
            res.status(409).json({
                success: false,
                errorMessage: "User Already Exists",
            });
        } else {
            const newUser = new UserDB({
                name,
                email,
                password,
            });
            newUser.save((err) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        errorMessage: "Server Error",
                        error: err,
                    });
                } else {
                    res.status(201).json({
                        success: true,
                        successMessage: "Successfully Registerd",
                    });
                }
            });
        }
        if (err) {
            res.status(500).json({
                success: false,
                errorMessage: "Server Error",
                err: err
            });
        }
    });
};
