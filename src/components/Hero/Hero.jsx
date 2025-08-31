import { useState, useEffect, useRef } from "react";
import "./Hero.css";

const keywords = ["AI", "Tools", "Gameplay"];
const videos = {
  AI: "/assets/videos/ai-gameplay.mp4",
  Tools: "/assets/videos/gameplay-demo.mp4",
  Gameplay: "/assets/videos/gameplay-demo.mp4",
};

const Hero = () => {
  const [currentKeyword, setCurrentKeyword] = useState(keywords[0]);
  const [prevKeyword, setPrevKeyword] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  //Handle video transition and keywords
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = keywords.indexOf(currentKeyword);
      const next = keywords[(currentIndex + 1) % keywords.length];

      setPrevKeyword(currentKeyword); // keep old video visible for fade
      setCurrentKeyword(next);
      setIsTransitioning(true);

      // after fade duration, clear prev video
      const timeout = setTimeout(() => {
        setPrevKeyword(null);
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentKeyword]);

   // Handle scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setShowScrollIndicator(heroBottom > window.innerHeight)
      }
    }
  window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="video-container">
        {/* current video */}
        <video
          key={currentKeyword}
          className={`background-video ${isTransitioning ? "fade-in" : "visible"}`}
          autoPlay
          muted
          loop
          playsInline
          src={videos[currentKeyword]}
        />

        {/* previous video stays during fade */}
        {prevKeyword && (
          <video
            key={prevKeyword}
            className={`background-video fade-out`}
            autoPlay
            muted
            loop
            playsInline
            src={videos[prevKeyword]}
          />
        )}
      </div>

      <div className="hero-content">
        <h1>Jose Manuel Soriano</h1>
        <h2>
          <span className="keyword">{currentKeyword}</span> Programmer
        </h2>
      </div>

      {showScrollIndicator && (
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
