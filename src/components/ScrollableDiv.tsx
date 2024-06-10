import React, { useRef, useState, useEffect } from "react";
// import "./ScrollableDiv.css";

const ScrollableDiv = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    checkArrows();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed by multiplying by 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    checkArrows();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    checkArrows();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    checkArrows();
  };

  const checkArrows = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  return (
    <div className="scrollable-container">
      {showLeftArrow && <div className="arrow left-arrow">{"<"}</div>}
      <div
        ref={scrollContainerRef}
        className="scroll-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={checkArrows}
      >
        {children}
      </div>
      {showRightArrow && <div className="arrow right-arrow">{">"}</div>}
    </div>
  );
};

export default ScrollableDiv;
