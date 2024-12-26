import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React from 'react';

export default function BestPaperPage() {
    return (
            <Worker workerUrl={"https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"}>
                <Viewer fileUrl="/best_paper.pdf" />
            </Worker>
    );
}