import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [shouldAnimateLeft, setShouldAnimateLeft] = useState(false);
  const [shouldAnimateRight, setShouldAnimateRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const divs = document.getElementsByClassName('content');

      Array.from(divs).forEach((div) => {
        const divPosition = div.getBoundingClientRect().top;

        if (divPosition < windowHeight / 2) {
          if (div.classList.contains('animate-left')) {
            setShouldAnimateLeft(true);
          } else if (div.classList.contains('animate-right')) {
            setShouldAnimateRight(true);
          }
        } else {
          if (div.classList.contains('animate-left')) {
            setShouldAnimateLeft(false);
          } else if (div.classList.contains('animate-right')) {
            setShouldAnimateRight(false);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px 20px',
          opacity: 0,
          transform: 'translateY(100%)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
        className={`content ${shouldAnimateLeft ? 'animate-left' : ''} ${shouldAnimateRight ? 'animate-right' : ''}`}
      >
        <div className="row">
          <div className="col-lg-6 col-sm-9">
            <div
              style={{
                textAlign: 'left',
                opacity: shouldAnimateLeft ? 1 : 0,
                transform: shouldAnimateLeft ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className={`text-content`}
            >
            lavada
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                opacity: shouldAnimateRight ? 1 : 0,
                transform: shouldAnimateRight ? 'translateX(0)' : 'translateX(100%)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className={`image-content`}
            >
              poda bunda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
