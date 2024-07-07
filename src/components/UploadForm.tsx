
import React, { useState } from "react";
import { useStorage } from "../hooks/useStorage";
const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {startUpload } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
      console.log(selectedFile);
      // Reset the file input after handling the submission
      setSelectedFile(null);
    }
  };

  return (
    <div className="text-center mt-1">
      <form onSubmit={handleSubmit} className="flex items-center justify-center h-96 mt-2">
        <input 
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered file-input-success w-full max-w-xs"
        />
        <button className="btn gap-3 bg-success" 
        // disabled={!selectedFile}
        >
          Upload <span>🪄</span>
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
