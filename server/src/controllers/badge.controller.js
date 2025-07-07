import { getBadges } from "../utils/badgeUtils";
import { generateReportPDF } from "../utils/pdfUtils";
import { sendReportEmail } from "../utils/emailUtils";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// 1. give badges to volunteer based on their contribution
export const getBadgesForUser = async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await db.user.findUnique({
            where: {id}
        });

        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        const checkInCount = await db.checkIn.count({
            where: {volunteerId: id}
        });

    const hours = checkInCount*5;
    const badges = getBadges(hours);
    
    res.status(200).json({hours, badges}); 

    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Failed to fecth badge"
        });
    }   
};

// 2. generate contribution report and send it on mail
export const generateAndSendReport = async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await db.user.findUnique({
            where: { id }
        });
    
        if(!user) return res.status(404).json({
            message: "User not found"
        });

        const checkInCount = await db.checkIn.count({
            where: {volunteerId: id}
        });

        const hours = checkInCount*2;
        const badges = getBadges(hours);
    
        const filePath = `./reports/report_${user.id}.pdf`;
        
        await generateReportPDF(user, hours, badges, filePath);
        await sendReportEmail(user.email, filePath);

        res.download(filePath, (error) => {
            if(error) console.log("Download failed: ", error);
            else {
                fs.unlink(filePath, (unlinkErr) => {
                    if(unlinkErr) console.log("Cleanup failed: ", unlinkErr);
                });
            }
        });   
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Failed to generate or send report"
        });
    }
}