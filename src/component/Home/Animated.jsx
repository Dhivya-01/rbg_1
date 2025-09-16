import React from 'react';

const AnimatedImageBackground = ({ 
  primaryImages = [],
  secondaryImages = [],
  opacity = 0.08,
  primaryCount = 20,
  secondaryCount = 15 
}) => {
  // Default placeholder images if none provided
  const defaultPrimaryImages = [

    "https://via.placeholder.com/50x50/6366F1/FFFFFF?text=ML", 
    "https://via.placeholder.com/55x55/8B5CF6/FFFFFF?text=OPS",
    "https://via.placeholder.com/45x45/06B6D4/FFFFFF?text=DATA",
    "https://via.placeholder.com/65x65/10B981/FFFFFF?text=AUTO"
  ];

  const defaultSecondaryImages = [
    "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=API",
    "https://via.placeholder.com/35x35/EF4444/FFFFFF?text=DB",
    "https://via.placeholder.com/45x45/8B5CF6/FFFFFF?text=AI",
    "https://via.placeholder.com/38x38/EC4899/FFFFFF?text=UI"
  ];

  const finalPrimaryImages = primaryImages.length > 0 ? primaryImages : defaultPrimaryImages;
  const finalSecondaryImages = secondaryImages.length > 0 ? secondaryImages : defaultSecondaryImages;

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatRight {
          0% { 
            transform: translateX(-120px) translateY(0px) rotate(0deg) scale(0.7); 
          }
          25% { 
            transform: translateX(25vw) translateY(-40px) rotate(90deg) scale(1.3); 
          }
          50% { 
            transform: translateX(50vw) translateY(30px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateX(75vw) translateY(-20px) rotate(270deg) scale(1.1); 
          }
          100% { 
            transform: translateX(calc(100vw + 120px)) translateY(0px) rotate(360deg) scale(0.7); 
          }
        }

        @keyframes floatLeft {
          0% { 
            transform: translateX(calc(100vw + 120px)) translateY(0px) rotate(360deg) scale(1); 
          }
          25% { 
            transform: translateX(75vw) translateY(35px) rotate(270deg) scale(0.6); 
          }
          50% { 
            transform: translateX(50vw) translateY(-45px) rotate(180deg) scale(1.4); 
          }
          75% { 
            transform: translateX(25vw) translateY(20px) rotate(90deg) scale(0.8); 
          }
          100% { 
            transform: translateX(-120px) translateY(0px) rotate(0deg) scale(1); 
          }
        }

        @keyframes floatDiagonal {
          0% { 
            transform: translateX(-100px) translateY(100vh) rotate(0deg) scale(0.5); 
          }
          33% { 
            transform: translateX(30vw) translateY(70vh) rotate(120deg) scale(1.5); 
          }
          66% { 
            transform: translateX(70vw) translateY(30vh) rotate(240deg) scale(0.7); 
          }
          100% { 
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg) scale(0.5); 
          }
        }

        @keyframes floatVertical {
          0% { 
            transform: translateY(100vh) translateX(0px) rotate(0deg) scale(0.8); 
          }
          25% {
            transform: translateY(75vh) translateX(20px) rotate(90deg) scale(1.2);
          }
          50% { 
            transform: translateY(50vh) translateX(40px) rotate(180deg) scale(1.6); 
          }
          75% {
            transform: translateY(25vh) translateX(20px) rotate(270deg) scale(1);
          }
          100% { 
            transform: translateY(-120px) translateX(0px) rotate(360deg) scale(0.8); 
          }
        }

        @keyframes floatZigzag {
          0% { 
            transform: translateX(-80px) translateY(0px) rotate(0deg) scale(1); 
          }
          20% { 
            transform: translateX(20vw) translateY(-30px) rotate(72deg) scale(0.7); 
          }
          40% { 
            transform: translateX(40vw) translateY(20px) rotate(144deg) scale(1.3); 
          }
          60% { 
            transform: translateX(60vw) translateY(-25px) rotate(216deg) scale(0.9); 
          }
          80% { 
            transform: translateX(80vw) translateY(15px) rotate(288deg) scale(1.1); 
          }
          100% { 
            transform: translateX(calc(100vw + 80px)) translateY(0px) rotate(360deg) scale(1); 
          }
        }

        .animated-bg-primary {
          animation-duration: 25s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animated-bg-secondary {
          animation-duration: 35s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* Main Background Container */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{ opacity }}
      >
        {/* Primary Floating Images */}
        {[...Array(primaryCount)].map((_, i) => {
          const animations = ['floatRight', 'floatLeft', 'floatDiagonal', 'floatVertical', 'floatZigzag'];
          const selectedAnimation = animations[i % animations.length];
          
          return (
            <div
              key={`primary-${i}`}
              className="absolute animated-bg-primary"
              style={{
                top: `${(i * 17 + Math.sin(i) * 20) % 100}%`,
                left: `${(i * 23 + Math.cos(i) * 15) % 100}%`,
                animationName: selectedAnimation,
                animationDelay: `${i * 2}s`,
                animationDuration: `${25 + (i % 10) * 2}s`
              }}
            >
              <img 
                src={finalPrimaryImages[i % finalPrimaryImages.length]}
                alt=""
                className="w-auto h-auto max-w-16 max-h-16 object-contain filter grayscale opacity-60 hover:opacity-80 transition-all duration-500"
                style={{
                  filter: 'grayscale(100%) brightness(1.3) contrast(0.8)',
                }}
                loading="lazy"
              />
            </div>
          );
        })}

        {/* Secondary Floating Images */}
        {[...Array(secondaryCount)].map((_, i) => {
          const animations = ['floatLeft', 'floatRight', 'floatVertical', 'floatZigzag', 'floatDiagonal'];
          const selectedAnimation = animations[i % animations.length];
          
          return (
            <div
              key={`secondary-${i}`}
              className="absolute animated-bg-secondary"
              style={{
                top: `${(i * 25 + 60 + Math.sin(i + 1) * 25) % 100}%`,
                right: `${(i * 18 + Math.cos(i + 1) * 20) % 100}%`,
                animationName: selectedAnimation,
                animationDelay: `${i * 3.5}s`,
                animationDuration: `${35 + (i % 8) * 3}s`
              }}
            >
              <img 
                src={finalSecondaryImages[i % finalSecondaryImages.length]}
                alt=""
                className="w-auto h-auto max-w-12 max-h-12 object-contain filter grayscale opacity-40 hover:opacity-60 transition-all duration-300"
                style={{
                  filter: 'grayscale(100%) brightness(1.5) contrast(0.6)'
                }}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimatedImageBackground;