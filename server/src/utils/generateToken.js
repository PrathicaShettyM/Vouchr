import jwt from "jsonwebtoken";
// JWTs are used for secure authentication,
// encoding user data into a compact, URL-safe string.

export const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: "7d"}
    );
};

// sign: method generates a token by encoding a payload, 
// signing it with a secret key, and applying an algorithm (typically HMAC-SHA256 by default).

// The method returns a JWT string, which is a Base64-encoded string consisting of three parts (header, payload, and signature) separated by dots 
// (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwicm9sZSI6IlZPTFVOVEVFUiIsImlhdCI6MTcyMDI2NDc0NiwiZXhwIjoxNzIwODY5NTQ2fQ.Signature
// JWT string: stored in a cookie or local storage of the client and sent in future requests
