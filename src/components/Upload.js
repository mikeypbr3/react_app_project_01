import React, { useState } from 'react';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Add your file upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Perform necessary actions with the uploaded file
    }
  };

  return (
    <div>
      <h1>Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
}

export default Upload;
