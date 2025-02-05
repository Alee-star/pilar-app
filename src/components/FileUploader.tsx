import React, { useState } from "react";

interface FileUploaderProps {
  buttonLabel?: string;
  acceptedFormats?: string;
  maxFileSize?: number;
  helperText?: string;
  requirement: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  buttonLabel,
  acceptedFormats,
  requirement,
  maxFileSize = 5 * 1024 * 1024,
  helperText,
}) => {
  const [document, setDocument] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDocChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > maxFileSize) {
        setError(
          `File size exceeds the limit of ${maxFileSize / 1024 / 1024}MB`
        );
      } else {
        setError(null);
        const objectURL = URL.createObjectURL(file);
        setDocument(objectURL);
      }
    }
  };

  const handleDelete = () => {
    if (document) {
      URL.revokeObjectURL(document);
    }
    setDocument(null);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium text-sm leading-5 text-gray-900">
        {buttonLabel}
        <span className="text-gray-500 ml-2 text-xs">{helperText}</span>
      </label>
      <div className="w-full relative">
        <input
          type="file"
          accept={acceptedFormats}
          onChange={handleDocChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-nowrap text-left rounded-lg z-50">
          {document ? (
            <>
              <div className="max-w-max flex items-center text-white font-medium text-sm leading-5 px-4 py-2.5 rounded-l-lg border border-r-0 border-green-500 bg-green-400">
                Choose file
              </div>
              <div className="bg-white flex-1 text-gray-900 p-3 text-sm leading-4 rounded-r-lg border border-l-0 border-green-500 bg-green-50 text-green-700">
                Click to upload more
              </div>
            </>
          ) : (
            <>
              <div className="max-w-max flex items-center text-white font-medium text-sm leading-5 px-4 py-2.5 rounded-l-lg border border-r-0 border-gray-300 bg-gray-800 cursor-pointer">
                Choose file
              </div>
              <div className="bg-white flex-1 text-gray-900 p-3 text-sm leading-4 rounded-r-lg border border-l-0 border-gray-300">
                Click to upload more
              </div>
            </>
          )}
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        {document && (
          <div className="mt-3 flex gap-3 w-full flex-wrap">
            <div className="flex gap-4 py-5 w-full">
              <div className="relative h-20 w-24 bg-white">
                <div className="w-full">
                  <div className="border rounded-lg w-full overflow-hidden">
                    <img src={document} className="h-24 w-26" />
                  </div>
                </div>
                <div
                  className="flex justify-center items-center bg-gray-400 w-6 h-6 absolute -right-2 -top-2 rounded-full z-10"
                  onClick={handleDelete}
                >
                  <img src="src/assets/delete.svg" alt="delete-icon" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <span className="text-xs leading-5 text-gray-500">{requirement}</span>
    </div>
  );
};

export default FileUploader;
