import React, { useState } from "react";

interface FileUploaderProps {
  buttonLabel?: string;
  acceptedFormats?: string;
  helperText?: string;
  requirement: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  buttonLabel,
  acceptedFormats,
  requirement,
  helperText,
}) => {
  const [document, setDocument] = useState<string | null>(null);

  const handleDocChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocument(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
          <div className="max-w-max flex items-center text-white font-medium text-sm leading-5 px-4 py-2.5 rounded-l-lg border border-r-0 border-gray-300 bg-gray-800 cursor-pointer">
            Choose file
          </div>
          <div className="bg-white flex-1 text-gray-900 p-3 text-sm leading-4 rounded-r-lg border border-l-0 border-gray-300">
            {document ? "File uploaded" : " Click to upload more"}
          </div>
        </div>
      </div>
      <span className="text-xs leading-5 text-gray-500">{requirement}</span>
    </div>
  );
};

export default FileUploader;
