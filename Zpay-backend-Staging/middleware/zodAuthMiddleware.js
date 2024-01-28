const { z } = require("zod");

const jwtSchema = z.object({
  userId: z.string(),
});

const zodAuthMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Access denied. No token provided");
  }

  try {
    const decoded = jwtSchema.parse({ userId: "dummy" });
    req.user = decoded;
    next();
  } catch (e) {
    console.error("Zod JWT validation error:", error.errors);
    res.status(403).send("Invalid Token");
  }
};

module.exports = { zodAuthMiddleware };
