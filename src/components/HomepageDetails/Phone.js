import React, { useEffect, useState } from 'react';

const PhoneAnimation = () => {
  const [shouldAnimateLeft, setShouldAnimateLeft] = useState(false);
  const [shouldAnimateRight, setShouldAnimateRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftComponent = document.querySelector('.text-content');
      const rightComponent = document.querySelector('.image-content');
      const windowHeight = window.innerHeight;

      const leftComponentPosition = leftComponent.getBoundingClientRect().top;
      const rightComponentPosition = rightComponent.getBoundingClientRect().top;

      if (leftComponentPosition < windowHeight / 2) {
        setShouldAnimateLeft(true);
      } else {
        setShouldAnimateLeft(false);
      }

      if (rightComponentPosition < windowHeight / 2) {
        setShouldAnimateRight(true);
      } else {
        setShouldAnimateRight(false);
      }
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
        className={`content ${shouldAnimateLeft ? 'animate-left' : ''}`}
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
              className={`text-content ${shouldAnimateLeft ? 'animate' : ''}`}
            >
              djdjd
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                opacity: shouldAnimateRight ? 1 : 0,
                transform: shouldAnimateRight ? 'translateY(0)' : 'translateY(100%)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className={`image-content ${shouldAnimateRight ? 'animate' : ''}`}
            >
              djsd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAnimation;
