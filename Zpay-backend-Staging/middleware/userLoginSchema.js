const { z } = require("zod");

const userLoginSchema = z.object({
  userId: z.string(),
  hashedPassword: string(),
});

module.exports = { userLoginSchema };
