import React, { useRef, useState, useEffect, MouseEvent } from "react";

interface ScrollableDivProps {
  children: React.ReactNode;
}

const ScrollableDiv: React.FC<ScrollableDivProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    checkArrows();
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust scroll speed by multiplying by 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
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
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
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
