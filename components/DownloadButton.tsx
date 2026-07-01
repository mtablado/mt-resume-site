"use client";

import { useState } from "react";
import { name as NAME } from "@/content/resume";

const NAVY = "#1e3a5f";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addFooter(pdf: any) {
  const totalPages = pdf.internal.getNumberOfPages();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const generatedOn = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);

    pdf.setDrawColor(203, 213, 225); // slate-300
    pdf.setLineWidth(0.2);
    pdf.line(10, pageHeight - 12, pageWidth - 10, pageHeight - 12);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(100, 116, 139); // slate-500
    pdf.text(`${NAME} · Generated ${generatedOn}`, 10, pageHeight - 7);
    pdf.text(`Page ${i} of ${totalPages}`, pageWidth - 10, pageHeight - 7, {
      align: "right",
    });
  }
}

export default function DownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const generate = () => {
      const element = document.getElementById("resume");
      if (!element) {
        setLoading(false);
        return;
      }

      // Scroll to top so html2canvas calculates element positions correctly,
      // then wait two animation frames for the browser to repaint before capturing.
      const savedScrollY = window.scrollY;
      window.scrollTo(0, 0);

      const capture = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)
        .html2pdf()
        .set({
          margin: 0,
          filename: "miguel-tablado-resume.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false,
            imageTimeout: 0,
            onclone: (_clonedDoc: Document) => {
              // html2canvas ignores object-fit, so we pre-draw each img with a
              // correct cover-crop onto a canvas and swap the src to a data URL.
              _clonedDoc
                .querySelectorAll<HTMLImageElement>("img")
                .forEach((clonedImg) => {
                  // Find the already-loaded original so naturalWidth is available
                  const orig = document.querySelector<HTMLImageElement>(
                    `img[alt="${clonedImg.alt}"]`
                  );
                  const src = orig ?? clonedImg;
                  const nw = src.naturalWidth;
                  const nh = src.naturalHeight;
                  if (!nw || !nh) return;

                  const dw = clonedImg.offsetWidth || nw;
                  const dh = clonedImg.offsetHeight || nh;

                  const canvas = document.createElement("canvas");
                  canvas.width = dw;
                  canvas.height = dh;
                  const ctx = canvas.getContext("2d");
                  if (!ctx) return;

                  // object-fit: cover calculation
                  const scale = Math.max(dw / nw, dh / nh);
                  const drawW = nw * scale;
                  const drawH = nh * scale;
                  ctx.drawImage(
                    src,
                    (dw - drawW) / 2,
                    (dh - drawH) / 2,
                    drawW,
                    drawH
                  );

                  clonedImg.src = canvas.toDataURL("image/jpeg", 0.98);
                  clonedImg.style.width = `${dw}px`;
                  clonedImg.style.height = `${dh}px`;
                  clonedImg.style.objectFit = "none";
                  clonedImg.style.maxWidth = "none";
                });
            },
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: "avoid-all" },
        })
        .from(element)
        .toPdf()
        .get("pdf")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((pdf: any) => addFooter(pdf))
        .output("bloburl")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((url: string) => {
          window.scrollTo(0, savedScrollY);
          window.open(url, "_blank");
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((err: any) => {
          window.scrollTo(0, savedScrollY);
          console.error("PDF generation failed:", err);
          alert("PDF generation failed — opening print dialog as fallback.");
          window.print();
        })
        .finally(() => setLoading(false));
      };

      // Two rAF calls ensure the browser repaints after scrollTo before capture
      requestAnimationFrame(() => requestAnimationFrame(capture));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).html2pdf) {
      generate();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
      script.onload = generate;
      script.onerror = () => {
        console.error("Failed to load html2pdf.js");
        setLoading(false);
        window.print();
      };
      document.head.appendChild(script);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      title="Download resume as PDF"
      className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm text-white shadow-lg transition-opacity hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer print:hidden z-50"
      style={{ backgroundColor: NAVY }}
    >
      {loading ? (
        <>
          <svg
            className="w-4 h-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
            />
          </svg>
          Generating…
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
          View PDF
        </>
      )}
    </button>
  );
}
