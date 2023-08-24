import React, { useRef } from "react";

const FileUpLoader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {

    const file = e.target.files[0];

    if (file.size > 1024) {
      onFileSelect(e.target.files[0]);
    } else {
      console.log("File size cannot exceed more than 1MB");
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpLoader;
