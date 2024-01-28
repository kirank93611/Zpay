const { z } = require("zod");

const userLoginSchema = z.object({
  userId: z.string(),
  hashedPassword: z.string(),
});

module.exports = { userLoginSchema };
