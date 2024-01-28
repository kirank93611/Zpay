const { z } = require("zod");

const userRegistrationSchema = z.object({
  userId: z.string(),
  walletAddress: z.string(),
  hashedPassword: z.string(),
});

module.exports = { userRegistrationSchema };
