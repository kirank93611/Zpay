const { Router } = require("express");
const router = Router();

const loginValidation = require("../middleware/userLoginSchema");
const { User } = require("../models/user");
const { route } = require("./registration");

router.post("/login", async (req, res) => {
  try {
    //parsing and validating the incoming data using ZodSchema
    const { userId, hashedPassword } = loginValidation.parse(req.body);

    //Finding the user in the database based on the provided userId
    const user = await User.findOne({ userId });

    //check if the  userId exists and the hashed password matches
    if (!user || !(await bcrypt.compare(hashedPassword, user.hashedPassword))) {
      // Send an error response for invalid login credentials
      return res.status(401).send("Invalid login credentials");
    }

    //sending an success response with the userId
    res.status(201).json({ message: "Login Successful", userId: user.userId });
  } catch (error) {
    //Handle errors related to schema validation or database operations
    console.error("Error in loggin in:", error.errors);
    res.status(400).json({ error: "Invalid data format" });
  }
});

module.exports = router;
