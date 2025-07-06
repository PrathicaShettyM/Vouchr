import { v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv/config";

// 1. set the cloudinary configuration by entering ur details
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. upload files to cloudinary
export const uploadToCloudinary = async (filePath) => {
    // upload to cloudinary uploader
    // give filepath and folder name where u want to store
    return await cloudinary.uploader.upload(filePath, {
        folder: 'vouchr',
    });
};

// 3. delete files from cloudinary
export const deleteFromCloudinary = async (publicId) => {
    // delete the media file from cloudinary uploader
    return await cloudinary.uploader.destroy(publicId);
}