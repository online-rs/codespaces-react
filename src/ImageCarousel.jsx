import React, { useState, useEffect, useRef } from 'react';
import { getImages } from './db';
import './ImageCarousel.css';

function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [paused, setPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [animationEnd, setAnimationEnd] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const storedImages = await getImages();
      setImages(storedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (animationEnd && carouselRef.current) {
      // Reset the animation to restart
      carouselRef.current.classList.remove('reset');
      void carouselRef.current.offsetWidth; // Trigger reflow
      carouselRef.current.classList.add('reset');
      setAnimationEnd(false);
    }
  }, [animationEnd]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCarouselClick = () => {
    setPaused(!paused);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleAnimationEnd = () => {
    setAnimationEnd(true);
  };

  return (
    <div className="carousel-container" onClick={handleCarouselClick}>
      <div
        ref={carouselRef}
        className={`carousel-track ${paused ? 'paused' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-item" onClick={() => handleImageClick(image)}>
            <img src={image.file} alt={image.name} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseClick}>
          <div className="modal-content">
            <img src={selectedImage.file} alt={selectedImage.name} />
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;