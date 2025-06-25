import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };

    if (isTouchDevice()) {
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
      return;
    }

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    const addLinkHoverListeners = () => {
      document.querySelectorAll('a, button, .tech-card, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    addLinkHoverListeners();

    const observer = new MutationObserver(() => {
      addLinkHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          position: 'fixed',
          width: linkHovered ? '50px' : '30px',
          height: linkHovered ? '50px' : '30px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          transition: 'opacity 0.2s ease, width 0.3s ease, height 0.3s ease, background 0.3s ease',
          zIndex: 9999,
          mixBlendMode: 'difference',
          background: linkHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: 'blur(1px)',
        }}
      />
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          zIndex: 10000,
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor; 