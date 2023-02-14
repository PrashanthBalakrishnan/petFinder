import React, { useState } from "react";

const defaultImg = ["https://pets-images.dev-apis.com/pets/none.jpg"];

const Carousel = ({ images = defaultImg }) => {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt="animal thumbnail"
            data-index={index}
            onClick={handleClick}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
