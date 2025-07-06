import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import {generateToken} from "../utils/generateToken.js";

// Prisma is an ORM (Object-Relational Mapping) tool used to interact with a database. 
// The curly braces indicate a named import, specifically pulling in the PrismaClient class.

// database connection instance(Prisma client)
// db: is object, used to perform db operations
const db = new PrismaClient();

// 1. user registration
export const register = async (req, res) => {
    // destructure the data from req.body sent in HTTP request body
    const {name, email, password, role} = req.body;
    try {
        // 1. check if the user already exists, if yes then give a warning message
        const userExists = await db.user.findUnique({
            where: {email}
        });

        if(userExists) return res.status(400).json({
            message: "User already exists"
        }); // 400:bad request

        // encrypt the password before storing it inside DB
        const hashed = await bcrypt.hash(password, 10);
        
        // create a new user object
        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashed,
                role: role || "VOLUNTEER",
            },
        });
        // generate jwt auth token by passing user object created above
        const token = generateToken(user);

        // send success HTTP response and json object containing the above generate token with user data(dont send sensitive data) 
        res.status(201).json({
            token, 
            user: {id: user.id, name: user.name, email: user.email, role: user.role}
        }); // 201: created
    } catch (error) {
        res.status(500).json({
            message: "User registration failed",
            error: error.message
        }); // 500: internal server error
    }
}

// 2. user login
export const login = async (req, res) => {
    // destructure the data from req.body sent in HTTP request body
    const {email, password} = req.body;
    try {
        // special admin login 
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const adminUser = {
                id: "admin",
                name: "Super Admin",
                email,
                role: "ADMIN"
            };

            const token = generateToken(adminUser);

            return res.status(200).json({
                token,
                user: adminUser,
            });
        }
        
        // 1. check if the user with the registered email exists
        const user = await db.user.findUnique({
            where: {email}
        });
        // 2. if user doesnt exist throw error message
        if(!user) return res.status(401).json("Invalid email or password");

        // 3. check if the password entered by user matches with the password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // 4. if password doesnt match return error response
        if(!isMatch) return res.status(401).json("Invalid email or password");

        // 5. generate a jwt auth token by passing user we found above 
        const token = generateToken(user);
        
        // send success response with a json object containing the toke and user details
        return res.status(200).json({
            token,
            user: {id: user.id, name: user.name, email: user.email, role: user.role}
        });
    } catch (error) {
        res.status(500).json({
            message: "Login failed, Try again",
            error: error.message
        });
    }
}

