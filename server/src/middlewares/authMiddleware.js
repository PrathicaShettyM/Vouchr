import jwt from "jsonwebtoken";

// route protection middlewares: allows volunteers access volunteer routes n not for outsiders
export const protect = (req, res, next) => {
    // 1. extract jwt from authorization header
    //    header is expected to be in the form of Bearer <token>
    //    we get it in req.headers.authorisation, '?' is used to verify it exists
    //    we then split tht string based on " " and take the token part(in index 1)
    let token = req.headers.authorisation?.split(" ")[1];

    // 2. if no token, restrict access 
    if(!token) return res.status(401).json({
        message: "No token, unauthorised"
    });

    // 3. if token found check if it is valid (it was signed by JWT_SCRET which was used to generate token, then if it gives back the same token then its a valid token)
    try {
        // pass token and scret key(which was used in generate token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // if valid, jwt.verify decodes the token and returns payload {id, email, role} and this is stored in decoded
        req.user = decoded; // id, email, role
        // now the next set of routers or middlewares can use this without again re-verifying the token
        next(); // go to next route / next middleware
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
};

// check if the logged in user is admin: if admin => give access to certain restricted routes as admin previledges
export const isAdmin = (req, res, next) => {
    // check the role of the user (set by "protect" middleware)
    if(req.user?.role !== "ADMIN") return res.status(403).json({
        message: "Admins only"
    });
}

export function isVolunteer(req, res, next){
    if(req.user.role != 'VOLUNTEER'){
        return res.status(403).json({
            message: "Access denied"
        });
    }
    next();
}

// ## Middleware in Express.js
// 1. It is a function that runs during the request-response cycle, 
// with access to the req (request), res (response), and next (a function to pass control to the next middleware or route handler). 
// Middleware can:
//   i.  Modify req or res objects.
//  ii.  Perform tasks like authentication, logging, or input validation.
// iii. Terminate the request (e.g., send an error response) or call next() to continue processing. Middleware is typically used for cross-cutting concerns, such as checking if a user is authenticated before allowing access to a route.