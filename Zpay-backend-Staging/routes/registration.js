const { Router } = require("express");
const router = Router();

const userValidation = require("../middleware/userRegistrationSchema");
const { User } = require("../models/user");
const { error } = require("console");

//user registration endpoint
router.post("/registration", async (req, res) => {
  //parsing and validating incoming data using zod
  try {
    const { userId, walletAddress, hashedPassword } = userValidation.parse(
      req.body
    );

    //here we are hasihing the password using bcrypt before saving it to the database
    const saltRounds = 10;

    //hasing the password of the user
    const hashed = await bcrypt.hash(hashedPassword, saltRounds);

    //here we create a new user instance with the validated data
    const newUser = new User({
      userId,
      walletAddress,
      hashedPassword: hashed,
    });

    //Save the user to the database
    await newUser.save();

    //Sending a success Response
    res.status(201).send("User Registered Successfully");
  } catch (error) {
    //handling error related to schema validation or database operations
    console.error("Error registering a new user:", error.errors);
    res.status(400).json({ error: "Invalid data format" });
  }
});

module.exports = router;
