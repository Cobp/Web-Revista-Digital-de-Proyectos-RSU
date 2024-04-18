import { useEffect, useRef, useState } from 'react';
import './Drawer.Module.css';

const Drawer = ({ children, isOpen, setIsOpen }) => {
  const [startY, setStartY] = useState(null);
  const [offsetY, setOffsetY] = useState(0);
  const [wasOpened, setWasOpened] = useState(isOpen);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 27) {
        setIsOpen(!isOpen);
      }
    };

    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen, isOpen]);

  const handleStart = (e) => {
    if (e.touches) {
      setStartY(e.touches[0].clientY);
    } else {
      setStartY(e.clientY);
    }
    setWasOpened(isOpen);
  };

  const handleMove = (e) => {
    if ((e.touches && startY !== null) || (!e.touches && startY !== null && e.buttons === 1)) {
      const mouseY = e.touches ? e.touches[0].clientY : e.clientY;
      const newOffsetY = mouseY - startY;
  
      if (newOffsetY > 0) {
        setOffsetY(newOffsetY);
      }
    }
  };
  

  const handleEnd = () => {
    if (offsetY > 200) {
      setIsOpen(false);
      setOffsetY(0);
    } else {
      if (!wasOpened) {
        setIsOpen(true);
      }
      setStartY(null);
      setOffsetY(0);
    }
  };

  return (
    <div className={`container-drawer ${isOpen ? 'closeDrawer' : 'openDrawer'}`}>
      <div
        className='D-aling column content-drawer'
        style={{ transform: `translateY(${offsetY}px)` }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div className='D-aling column W-100 content' ref={contentRef}>
          <span></span>
          <div className="W-Max W-100">
            {children}
          </div>
        </div>
      </div>
      <style>{`
        body{
          margin-right:${isOpen ? '15px' : '0'} !important;
          overflow: ${isOpen ? 'hidden' : 'auto'};
        }
        header{
          ${isOpen && `box-shadow: 0 0 0 rgba(0, 0, 0, 0);`}
        }
      `}</style>
    </div>
  );
};

export default Drawer;
