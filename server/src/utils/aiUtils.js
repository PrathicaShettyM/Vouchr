import axios from "axios";

export const summarizeText = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Summary unavailable at the moment" 
        });
    }
}