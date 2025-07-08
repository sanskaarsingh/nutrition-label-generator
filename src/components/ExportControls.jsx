import React, { useRef } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { useReactToPrint } from 'react-to-print';

const ExportControls = ({ labelRef }) => {
  const handleExportImage = async () => {
    if (!labelRef.current) return;
    
    try {
      const dataUrl = await toPng(labelRef.current);
      const link = document.createElement('a');
      link.download = 'nutrition-label.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error exporting image:', error);
    }
  };

  const handleExportPDF = async () => {
    if (!labelRef.current) return;
    
    try {
      const dataUrl = await toPng(labelRef.current);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm'
      });
      
      // Calculate dimensions to maintain aspect ratio
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('nutrition-label.pdf');
    } catch (error) {
      console.error('Error exporting PDF:', error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => labelRef.current,
  });

  return (
    <ButtonGroup variant="contained" sx={{ mt: 2 }}>
      <Button onClick={handlePrint}>Print Label</Button>
      <Button onClick={handleExportImage}>Export as Image</Button>
      <Button onClick={handleExportPDF}>Export as PDF</Button>
    </ButtonGroup>
  );
};

export default ExportControls;