"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface ClodinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="image"
        ></CldImage>
      )}
      <CldUploadWidget
        options={{
          sources: ["local", "camera", "google_drive"],
          multiple: false,
          maxImageFileSize: 500000
        }}
        uploadPreset="lahd411t"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as ClodinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            {" "}
            Upload{" "}
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
