const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Access Denied. No Token Provided."
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }

};

// New Middleware
const adminOnly = (req, res, next) => {

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Only Admin can perform this action"
        });
    }

    next();

};

module.exports = {
    authMiddleware,
    adminOnly
};