import {PrismaClient} from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";
const db = new PrismaClient();
import fs from 'fs';

// 1. Get user profile by ID
export const getProfile = async (req, res) => {
    try {
        // 1. fetch the profile details from url
        const profile = await db.profile.findUnique({
            where: {userId: req.params.id}
        });
        
        // 2. if profile doesnt exist, give warning message
        if(!profile) return res.status(404).json({
            message: "Profile not found"
        });

        // 3. give a json response
        res.json(profile);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error fetching profile"
        });
    }
}

// ***check if we need to create the profile first before updating 

// 2. Update profile
export const updateProfile = async (req, res) => {
    // 1. destructure these from the req.body (from the form data)
    const {gender, bio, location, imageUrl} = req.body;

    try {
        let imageUrl;
        if(req.file){
            const result = await uploadToCloudinary(req.file.path);
            imageUrl = result.secure_url;
            fs.unlinkSync(req.file.path);
        }
        // 2. get the user id from req.params in url, update 4 fields, and give the latest values to all fields as per the schema 
        const updated = await db.profile.upsert({ // upsert: update and insert
            where: {userId: req.params.id},
            update: {gender, bio, location, imageUrl},
            create: {
                userId: req.params.id,
                email: req.user.email, // from the token middleware
                gender,
                bio,
                location,
                imageUrl, // from cloudinary cloud
            },
        });

        // give a json response
        res.json(updated);
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({
            message: "Error updating profile"
        });
    }
}

// 3. Search volunteers by skill
export const searchVolunteers = async (req, res) => {
    const {skill} = req.query;
    try {
       const results = await db.profile.findMany({
        where: {
            bio: {
                contains: skill,
                mode: "insensitive"
            },
        },
       }); 
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error searching profiles"
        })
    }
}

