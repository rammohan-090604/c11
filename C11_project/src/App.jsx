import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileMetadata from "filepond-plugin-file-metadata";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileMetadata,
  FilePondPluginImagePreview
);

const App = () => {
  const [files, setFiles] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState("/convert-image");
  const [responseMessage, setResponseMessage] = useState("");

  const handleProcessFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const resultFile = new Blob([reader.result], { type: file.type });
        resolve(resultFile);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (files.length === 0) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", files[0].file); // Append the uploaded file
    formData.append("operation", selectedOperation); // Append the selected operation

    try {
      const response = await fetch(`http://localhost:8000${selectedOperation}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.blob(); // Assuming the backend sends a blob (video/image/text)
      const url = window.URL.createObjectURL(result);

      setResponseMessage(`File processed successfully! Download: [Link](${url})`);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error processing the file.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">File Encryption & Processing</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={false}
          maxFiles={1}
          name="files"
          acceptedFileTypes={["image/png", "image/jpeg", "application/pdf", "video/mp4", "text/plain"]}
          className="mb-4"
          labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
          imagePreviewHeight={170}
        />

        <label htmlFor="operation" className="block mb-2 text-gray-700">
          Select Operation:
        </label>
        <select
          id="operation"
          value={selectedOperation}
          onChange={(e) => setSelectedOperation(e.target.value)}
          className="mb-4 border border-gray-300 rounded p-2 w-full"
        >
          <option value="/convert-image">Encrypt Image and Convert to Video</option>
          <option value="/decrypt-video-to-image">Decrypt Video and Convert to Image</option>
          <option value="/encrypt-text-to-video">Encrypt Text and Convert to Video</option>
          <option value="/decrypt-video-to-text">Decrypt Video and Convert to Text</option>
        </select>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Submit
        </button>
      </form>

      {responseMessage && (
        <div className="mt-4 p-2 bg-gray-200 rounded">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default App;
