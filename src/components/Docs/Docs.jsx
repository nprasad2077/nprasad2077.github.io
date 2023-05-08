import React, { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";

const Docs = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function updatePdfWidth() {
      if (containerRef.current) {
        setPdfWidth(containerRef.current.clientWidth);
      }
    }

    updatePdfWidth();
    window.addEventListener("resize", updatePdfWidth);

    return () => {
      window.removeEventListener("resize", updatePdfWidth);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="flex flex-col grow-0" ref={containerRef}>
      <Document file="\assets\docs\resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={pdfWidth}
        />
      </Document>

      <div className="text-center">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>{" "}
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default Docs;
