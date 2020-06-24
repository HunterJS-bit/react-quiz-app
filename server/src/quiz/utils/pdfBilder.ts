import * as PDFDocument from 'pdfkit';

const pdfBuffer = (data) => {
    return new Promise(resolve => {
        const doc = new PDFDocument({ margin: 50 });
        // console.log('dataaaaa ', data);
        generateHeader(doc);
        // doc.text('hello world', 100, 50)
        generateFooter(doc);
        doc.end()
    
        const buffers = [];
        doc.on("data", buffers.push.bind(buffers))
        doc.on("end", () => {
          const pdfData = Buffer.concat(buffers)
          resolve(pdfData)
        })
    })
}

const generatePDF = async (data) => {
    const response = await pdfBuffer(data);
    return response;
}

function generateFooter(doc) {
    doc.text('This is a footer', 20, doc.page.height - 50, {
        lineBreak: false
      });
}

function generateHeader(doc) {
    doc
      .fillColor("#444444")
      .fontSize(20)
      .text("ACME Inc.", 110, 57)
      .fontSize(10)
      .text("123 Main Street", 200, 65, { align: "right" })
      .text("New York, NY, 10025", 200, 80, { align: "right" })
      .moveDown();
}
export default generatePDF;