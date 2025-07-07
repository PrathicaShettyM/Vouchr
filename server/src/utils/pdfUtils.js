import PDFDocument from "pdfkit";
import fs from "fs";

// generate pdf report about volunteer contribution
export function generateReportPDF(user, hours, badges, path){
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const stream = fs.createWriteStream(path);
        doc.pipe(stream);

        doc.fontSize(20).text(`Volunteer Report Card`, {align: "center"});
        doc.moveDown();
        doc.fontSize(14).text(`Name: ${user.name}`);
        doc.text(`Email: ${user.email}`);
        doc.text(`Total Hours: ${hours}`);
        doc.text(`Badges: ${badges.join(",")}`);
        doc.end();

        stream.on("Finish", () => resolve(path));
        stream.on("Error: ", reject);
    })
}
