import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useEffect, useRef } from "react";

interface Props {
  imagePreview: string;
  setCropper: (cropper: Cropper) => void;
}
const PhotoWidgetCropper = ({ imagePreview, setCropper }: Props) => {
  const cropperRef = useRef<ReactCropperElement>(null);

  useEffect(() => {
    if (cropperRef.current) {
      setCropper(cropperRef.current.cropper);
    }
  }, [imagePreview]);

  return (
    <Cropper
      ref={cropperRef}
      src={imagePreview}
      style={{ height: 200, width: "100%" }}
      initialAspectRatio={1}
      aspectRatio={1}
      preview=".img-preview"
      guides={false}
      viewMode={1}
      autoCropArea={1}
      background={false}
    />
  );
};

export default PhotoWidgetCropper;
