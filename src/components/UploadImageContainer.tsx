import { cn } from "@/lib/utils";
import React from "react";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Button } from "./ui/button";
import { generateHash } from "@/helpers/generateImage";

function UploadImageContainer() {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const verifyImage = async () => {
    const imageHash = generateHash(images[0].data_url, []);
    // signMessage(
    //   { account: address, message: address },
    //   {
    //     onSuccess(data) {
    //       setSign(data);
    //       generateRandomNumbers(sign)
    //         .then((randomNumbers) => {
    //           console.log("primera imagen hash: ", generateHash(photoData, []));
    //           console.log(randomNumbers);
    //           // TODO: add algo to change image
    //           const newPhoto = processImage(photoData, randomNumbers);
    //           console.log("segunda imagen hash: ", generateHash(newPhoto, []));
    //           setNewPhotoData(newPhoto);
    //           setIsLoading(false);
    //           setIsConfirmed(true);
    //         })
    //         .catch((err) => console.log("error: ", err));
    //     },
    //     onError(error) {
    //       console.log(error);
    //       setIsLoading(false);
    //     },
    //   }
    // );
    return imageHash;
  };

  return (
    <div className="w-full h-full">
      {" "}
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, isDragging, dragProps }) => (
          // write your building UI
          <div className="upload__image-wrapper flex flex-col gap-5 h-full w-full items-center justify-center">
            <button
              className={cn(
                "w-full h-full max-h-[200px] rounded-lg  outline-dashed outline-primary transition-all",
                { "bg-secondary !bg-opacity-20 text-primary": isDragging }
              )}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            {imageList.map((image, index) => (
              <img
                className="w-[200px] h-[200px]"
                key={index}
                src={image.data_url}
              />
            ))}
            {images.length > 0 && (
              <Button className="w-full" onClick={verifyImage}>
                Verify Image 🔒
              </Button>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImageContainer;
