import * as PDFDocument from 'pdfkit';
let font = __dirname + '/../../assets/Roboto-Regular.ttf';

const pdfBuffer = (data) => {
    return new Promise(resolve => {
        const doc = new PDFDocument({ margin: 50 });
        doc.registerFont('Roboto', font);
        generateHeader(doc);
        generateHeading(doc, data.name);
        generateMain(doc, data.questions);
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
        lineBreak: false,
        align: "center"
      });
}

function generateHeader(doc) {
    doc
      .fillColor("#444444")
      .fontSize(20)
      .text("Auto-testovi.com", 110, 57)
      .fontSize(10)
      .text("123 Main Street", 200, 65, { align: "right" })
      .text("New York, NY, 10025", 200, 80, { align: "right" })
      .moveDown();
}

function generateHeading(doc, title) {
    doc
    .fillColor("#444444")
    .fontSize(24)
    .text(`Auto testovi iz Testa broj 1`,  200, 80)
    .moveDown();
}

function generateMain(doc, list) {
    let i,
    invoiceTableTop = 150;
    list.map((e, i) => {
        const position = invoiceTableTop + (i + 1) * 20;
        generateTableRow(
        doc,
        position,
        e.question,
        );
        doc.moveDown();
       // doc.list(e.options,{numbered: true})
    })
}


function generateTableRow(doc, y, c1, c2?, c3?, c4?, c5?) {
    doc
      .fontSize(10)
      .font('Roboto')
      .text('Kada policijsko vozilo sa prvenstvom prolaza daje istovremeno i svetlosni znak upozorenja (uzastopno ili naizmenično uključivanje dugih svetala), vozač vozila koje se kreće neposredno ispred policijskog vozila koje daje te znake mora:')
      .moveDown()
  }
export default generatePDF;