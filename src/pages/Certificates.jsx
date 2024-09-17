import { useState } from "react";
import "../../styles/ImageGrid.css"; // Import the CSS file
import certificateData from "../component/CertificatesData";
import Navbar from "../component/Nav";

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row g-4">
        {certificateData.map((image, index) => (
          <div
            key={index}
            className="col-3 image-card" //col-md-4 col-lg-2
            onClick={() => handleClick(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="img-fluid image-thumbnail"
            />
            <h5 className="text-center mt-2">{image.title}</h5>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={handleClose}>
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="modal-image"
            />
            <p className="modal-description">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
