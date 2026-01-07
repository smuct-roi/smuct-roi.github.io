import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerCarousel.css';

const BannerCarousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  const pointerStartX = useRef(null);

  // autoplay every 2 seconds
  useEffect(() => {
    if (items.length <= 1) return undefined;
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex(i => (i + 1) % items.length);
      }, 2000);
    }
    return () => clearInterval(timerRef.current);
  }, [items.length, paused]);

  const goTo = (i) => {
    setIndex((i + items.length) % items.length);
    restartTimer();
  };

  const restartTimer = () => {
    clearInterval(timerRef.current);
    if (!paused && items.length > 1) {
      timerRef.current = setInterval(() => {
        setIndex(i => (i + 1) % items.length);
      }, 2000);
    }
  };

  // Pointer / touch handlers for swipe
  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX ?? (e.touches && e.touches[0] && e.touches[0].clientX);
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current == null) return;
    const endX = e.clientX ?? (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX);
    const diff = pointerStartX.current - (endX ?? 0);
    if (Math.abs(diff) > 50) {
      if (diff > 0) setIndex(i => (i + 1) % items.length);
      else setIndex(i => (i - 1 + items.length) % items.length);
      restartTimer();
    }
    pointerStartX.current = null;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="banner-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slides">
        {items.map((item, i) => {
          const img = item.images && item.images.length ? item.images[0] : '/postimages/p1.jpeg';
          const cls = i === index ? 'slide active' : 'slide';
          return (
            <div
              key={item.id}
              className={cls}
              onClick={() => navigate(`/posts/${item.id}`)}
              onMouseDown={handlePointerDown}
              onMouseUp={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchEnd={handlePointerUp}
              role="button"
              tabIndex={0}
            >
              <img src={img} alt={item.title} />
              <div className="slide-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {items.length > 1 && (
        <>
          <button
            className="carousel-btn prev-btn"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i => (i - 1 + items.length) % items.length);
              restartTimer();
            }}
          >
            ‹
          </button>

          <button
            className="carousel-btn next-btn"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i => (i + 1) % items.length);
              restartTimer();
            }}
          >
            ›
          </button>

          <div className="dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                  restartTimer();
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BannerCarousel;
