import React, { useState } from "react";

const defaultImg = ["https://pets-images.dev-apis.com/pets/none.jpg"];

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images = defaultImg }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.index) {
      setActive(+e.target.dataset.index);
    }
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
