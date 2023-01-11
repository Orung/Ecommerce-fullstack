const db = require("../models");

const userModels = db.users;

async function registerUser(req, res) {
  const registerUser = req.body;
  try {
    const user = await userModels.findAll(registerUser, {
      where: {
        username: req.body.user_name,
      },
    });
    if (registerUser.user_name === registerUser.user_name) {
      res.status(200).json([{ message: "username taken" }]);
    } else {
      await userModels
        .create(registerUser)
        .then((rs) => {
          res.status(200).json([{ message: "data created successfully" }]);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).json([{ message: "err" }]);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  registerUser,
};
