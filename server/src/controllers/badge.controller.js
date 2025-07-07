import { getBadges } from "../utils/badgeUtils";
import { generateReportPDF } from "../utils/pdfUtils";
import { sendReportEmail } from "../utils/emailUtils";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const getBadgesForUser = async (req, res) => {
    const { id } = req.params;
    
    const count = await db.checkIn.count({
        where: {volunteerId: parseInt(id)}
    });

    const hours = count*5;
    const badges = getBadges(hours);
    res.json({hours, badges});
}

export const generateAndSendReport = async (req, res) => {
    const { id } = req.params;
    
    const user = await db.user.findUnique({
        where: { id: parseInt(id) }
    });
    
    if(!user) return res.status(404).json({
        message: "User not found"
    });

    const count = await db.checkIn.count({
        where: {volunteerId: user.id}
    });

    const hours = count*2;
    
    const badges = getBadges(hours);
    
    const path = `./reports/report_${user.id}.pdf`;
    await generateReportPDF(user, hours, badges, path);
    await sendReportEmail(user.email, path);

    res.download(path);
}