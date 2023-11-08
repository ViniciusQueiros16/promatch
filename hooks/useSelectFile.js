import React, { useState } from "react";

const useSelectFile = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onSelectedFile = (event, inputName) => {
    const reader = new FileReader();
    const files = event.target.files;

    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      reader.onload = (readerEvent) => {
        setSelectedFiles((prevSelectedFiles) => {
          const updatedFiles = [...prevSelectedFiles];
          const existingFileIndex = updatedFiles.findIndex(
            (file) => file.inputName === inputName
          );

          if (existingFileIndex !== -1) {
            updatedFiles[existingFileIndex] = {
              inputName,
              dataURL: readerEvent.target?.result,
            };
          } else {
            updatedFiles.push({
              inputName,
              dataURL: readerEvent.target?.result,
            });
          }

          return updatedFiles;
        });
      };
    }
  };

  return { selectedFiles, onSelectedFile };
};

export default useSelectFile;
