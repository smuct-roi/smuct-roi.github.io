import React, { useState } from 'react';

// Small, reusable Carousel component
// Props: images: string[]
const Carousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) return <div className="carousel placeholder">No images available</div>;

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  return (
    <div className="carousel-root">
      <div className="carousel">
        <button aria-label="Previous image" className="carousel-btn left" onClick={prev}>‹</button>
        <img src={images[index]} alt={`slide-${index + 1}`} className="carousel-img" />
        <button aria-label="Next image" className="carousel-btn right" onClick={next}>›</button>
      </div>

      {images.length > 1 && (
        <div className="carousel-thumbs">
          {images.map((src, i) => (
            <button key={i} className={`thumb-btn ${i === index ? 'active' : ''}`} onClick={() => goTo(i)}>
              <img src={src} alt={`thumb-${i}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
