import { Article } from "@components/article/Article";
import React from "react";

function PdfToExcel() {
  return (
    <>
      <Article
        img={"/images/pdftoexcel-banner.png"}
        heading="HOW TO CONVERT PDF TO EXCEL"
        details="December 10, 2021 by Hung Nguyen"
        text1="Free converter to quickly save PDF documents to Excel spreadsheets within seconds. No need to enter an email address or download any software."
        text2="Transforming Microsoft Excel files to PDF is a simple task, as it can be done from your Office suite. However, reversing the process can be tricky—particularly if you want an editable Excel document in return."
        text3="Fortunately, our online converter will do just the trick. You don’t need to enter an email ID either; it’s as easy as that."
        list="How To Convert PDF to Excel"
        point1="Go to our online PDF to Excel converter."
        point2="Drag your PDF into the toolbox."
        point3="Select “Convert to Excel”—and voilá! It will start to extract your data to Excel format."
        point4="On the result page, download your file."
        otherHeading="Data Retention"
        otherDetails="For Small Convert Tool Pro users we offer the most advanced Optical Character Recognition (OCR) solution to make sure that your Excel files will have every row, column, and data retained, as you use our web browser-based tool. If you don’t already have an account you can sign up for a 7-day free trial to test out all the extra Pro features. Even if this isn’t the case, you can easily enhance, update, and enter additional data in any way you prefer—as the Excel file should be fully editable."
        otherHeading1="Compatibility"
        othertext1="Converting PDF to Excel should be a piece of cake with our online tools. But that’s not all. With over 20 functionalities on our website, we aim to enhance your overall experience working with digital documents, including other Office formats and images. "
        othertext2="Using our online portal, you can convert PDF files to Excel and other formats on any machine. Your Macbook, Windows computer, and even Linux. Similarly, if you have a PDF on your phone, download the Small Convert Tool Mobile App to convert and edit your PDFs wherever you are! "
        othertext3="Plus, if you’re not able to view the Excel file on your mobile device through Office suite, Dropbox and Google Drive are both available for you to export documents to these portals."
        comment={"/icons/jhondoe.png"}
        name="John Doe"
        title="UI UX Designer @ Small Converter Tool"
      />
    </>
  );
}

export default PdfToExcel;
