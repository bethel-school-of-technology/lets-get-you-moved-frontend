const router = require('express').Router();
const argon2 = require('argon2');
const { SuccessReponse, ErrorReponse } = require('../utils/ResponseUtils');
const User = require('../models/User');
const Order = require('../models/Order');

// Create user route
router.post('/register', async (req, res) => {
  try {
    // Creating password hash
    const hashedPassword = await argon2.hash(req.body.password);

    // Creating and saving user instance
    const { email, id } = await User.create({
      email: req.body.email,
      password: hashedPassword,
      firebaseId: req.body.firebaseId,
    });

    return res.send(new SuccessReponse({ email, id }));
  } catch (error) {
    res.status(500).send(new ErrorReponse(error.message));
  }
});


// Users orders
router.get('/orders/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: [Order],
    });

    if (!user) {
      return res.status(404).send(new ErrorReponse("Can't find user"));
    }

    return res.send(new SuccessReponse(user.Orders));
  } catch (error) {
    console.log(error);
    return res.status(500).send(new ErrorReponse(error.message));
  }
});

module.exports = router;
