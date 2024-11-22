import React, { useEffect, useState } from "react";
import "./App.css";

const CardStack = () => {
  // Array of image URLs
  const cardImages = [
    '/assets/images/image1.jpg',
    '/assets/images/image2.jpg',
    '/assets/images/image3.jpg',
    '/assets/images/image4.jpg',
    '/assets/images/image5.jpg',
    '/assets/images/image6.jpg',
    '/assets/images/image7.jpg',
    '/assets/images/image8.jpg',
    '/assets/images/image9.jpg',
    '/assets/images/image10.jpg',
    '/assets/images/image11.jpg',
    '/assets/images/image12.jpg',
  ];

  return (
    <div className="card-stack">
      {cardImages.map((image, i) => (
        <div
          key={i}
          className={`card card-${i + 1}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      ))}
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check for mobile width
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {/* Add a video element for background */}
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="/assets/videos/stars_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Render the CardStack */}
      <CardStack />
      
      {/* Mobile-only disclaimer */}
      {isMobile && (
        <div className="mobile-disclaimer">
          This website is best viewed on a desktop.
        </div>
      )}
    </div>
  );
};

export default App;
