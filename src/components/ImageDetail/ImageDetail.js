import React from "react";

const ImageDetail = ({ image }) => {
    if(!image){
        return null
    }
  return (
    <div>
      <img src={image.urls.regular} alt={image.description} />
    </div>
  );
};

export default ImageDetail;
