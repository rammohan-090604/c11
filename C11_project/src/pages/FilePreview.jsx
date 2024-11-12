import React, { useEffect, useState } from 'react';

const FilePreview = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const fileType = file.type;

  useEffect(() => {
    const reader = new FileReader();
    
    // Render preview based on file type
    if (fileType.startsWith("image")) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(<img src={imageUrl} alt="Image Preview" className="max-h-48 mb-2" />);
    } else if (fileType === "application/pdf") {
      const pdfUrl = URL.createObjectURL(file);
      setPreview(<iframe src={pdfUrl} className="w-full h-48 mb-2 border" title="PDF Preview" />);
    } else if (fileType.startsWith("text")) {
      reader.onload = () => {
        setPreview(<textarea value={reader.result} readOnly className="w-full h-48 mb-2 p-2 border" />);
      };
      reader.readAsText(file);
    } else {
      setPreview(<div className="p-4 border rounded bg-gray-200 mb-2">No preview available for this file type.</div>);
    }

    return () => {
      if (fileType.startsWith("image") || fileType === "application/pdf") {
        URL.revokeObjectURL(preview);
      }
    };
  }, [file, fileType, preview]);

  return (
    <div className="flex flex-col items-center">
      {preview}
      <p className="text-sm text-gray-600">{file.name}</p>
    </div>
  );
};

export default FilePreview;
