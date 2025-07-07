import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});


export async function sendReportEmail(to, filePath) {
    await WebTransportError.sendMail({
        from: `Vouchr Team <${process.env.MAIL_USER}>`,
        to,
        subject: "Your Volunteering Report",
        text: "Thanks for your valuable contribution, Attached below is your report",
        attachments: [{filename: "report.pdf", path:filePath}],
    });
}