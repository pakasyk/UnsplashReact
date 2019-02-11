import React from "react";
import ImageItem from "./ImageItem";

const ImageList = ({ images, onImageSelect }) => {
  if (!images.length) {
    return (
      <div className="d-flex flex-wrap justify-content-center align-items-center align-content-center">
        <h2 className="w-100 text-center">
          Front-End <span className="text-warning">DEV</span>
        </h2><br/>
        <h4 className="w-100 text-center">is looking for a JOB</h4>
      </div>
    );
  }
  const renderedList = images.map(image => (
    <ImageItem onImageSelect={onImageSelect} key={image.id} image={image} />
  ));

  return <div className="list-group">{renderedList}</div>;
};

export default ImageList;
