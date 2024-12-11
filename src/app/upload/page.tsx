"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    // 这里的 preset 换成你自己的 preset
    <CldUploadWidget uploadPreset="testfile">
      {({ open }) => (
        <button className="btn btn-secondary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};
export default UploadPage;