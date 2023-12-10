import { Bytes } from "@mjtdev/engine";

export const pdfToString = async (blob: Blob) => {
  const byteArray = await Bytes.toArrayBuffer(blob);
  // import { PDFExtract } from "pdf.js-extract";
  // const { PDFExtract } = await import("pdf.js-extract");
  // const pdfExtract = new PDFExtract();
  // pdfExtract.extract(filename, options, callback)
  // const buffer = Buffer.from(byteArray);
  // pdfExtract.extractBuffer(buffer, {}, (err, pdf) => {
  //   console.log(err);
  //   console.log(pdf);
  // });
  // const pdfDocument = await pdfjsLib.getDocument(byteArray).promise;
  // console.log(pdfDocument);
  // loadingTask.promise
  return "";
};
