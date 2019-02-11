import React from "react";

const ImageItem = ({ image, onImageSelect }) => {
  return (
    <button
        type="button"
      href="#"
      className="list-group-item list-group-item-action d-flex"
      key={image.id}
      /* advanced shit */
      onClick={() => onImageSelect(image) }
    >
     <img src={image.urls.thumb} alt={image.description} className="img-thumbnail" />
     <div className="content flex-fill d-flex flex-column align-items-center">
     <h5 className="text-center">{image.slug}</h5>
     
      <p className="text-center">{image.description}</p>
     </div>
      
    </button>
  );
};

export default ImageItem;
