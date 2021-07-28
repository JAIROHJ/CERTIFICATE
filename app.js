const generatePdf = async(name) => {
    const { PDFDocument, rgb } = PDFLib;


    const exBytes = await fetch("./certificate.pdf").then((res) => {
        return res.arrayBuffer();
    })
    const exFont = await fetch("./Lobster-Regular.ttf").then((res) => {
        return res.arrayBuffer();
    })

    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myfont = await pdfDoc.embedFont(exFont)




    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(name, {
        x: 300,
        y: 280,
        size: 40,
        font: myfont

    })

    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    // window.open(uri)
    document.querySelector("#mypdf").src = uri
}

generatePdf("AKSHAY ROHJ")
generatePdf("Devender Verma")