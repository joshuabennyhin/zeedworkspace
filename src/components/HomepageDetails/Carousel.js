import React, { useEffect, useRef } from "react";

const Carousel = ({ items, interval = 2000 }) => {
  const carouselRef = useRef(null);
  let currentIndex = 0;
  let timerId;

  const moveCarousel = () => {
    currentIndex = (currentIndex + 1) % (items.length - 2);
    carouselRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    
  };

  const startCarousel = () => {
    timerId = setInterval(moveCarousel, interval);

  };

  const stopCarousel = () => {

    clearInterval(timerId);
  };

  useEffect(() => {

    startCarousel();

    return () => {
     
      stopCarousel();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          width: `${(items.length - 6) * 33.33}%`,
          transform: "translateX(0%)"
        }}
        ref={carouselRef}
      >
          {items.map((item, index) => {
            console.log(index)
  if (index === currentIndex + 1) {
    
    return (
      <div
        key={index}
        style={{
          flex: "0 0 33.33%",
          width: "23.33%",
          height:"0px"
          // Add styles specific to the middle item
        }}
      >
        {item}
      </div>
    );
  } else {
    // Render other items
    return (
      <div
        key={index}
        style={{
          flex: "0 0 33.33%",
          width: "23.33%",
        
        }}
      >
        {item}
      </div>
    );
  }
})}

      </div>
    </div>
  );
};

export default Carousel;
