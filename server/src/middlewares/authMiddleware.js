import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    let token = req.headers.authorisation?.split(" ")[1];

    if(!token) return res.status(401).json({
        message: "No token, unauthorised"
    });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // id, email, role
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
};

export const isAdmin = (req, res, next) => {
    if(req.user?.role !== "ADMIN") return res.status(403).json({
        message: "Admins only"
    });
}
