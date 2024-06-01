import { useEffect, useState, useRef } from "react";
import './DropdownModule.css'

const LanguagePicker = ({ children }) => {
  const [lanShow, setLanShow] = useState(false);
  const [menuPosition, setMenuPosition] = useState('bottom');
  const refBoton = useRef(null);
  const handleClick = () => {
    setLanShow(!lanShow);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (refBoton.current && !refBoton.current.contains(event.target)) {
        setLanShow(false);
      }
    }
    const handleScroll = () => {
      if (refBoton.current) {
        const rect = refBoton.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top > windowHeight / 2) {
          setMenuPosition('top');
        } else {
          setMenuPosition('bottom');
        }
      }
    };

    const handleBodyClass = () => {
      if (lanShow) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();
    handleBodyClass();

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove('no-scroll');
    };
  }, [lanShow]);

  return (
    <div className="Dropdown-menu-container" ref={refBoton}>
      <button
        type="button"
        className="btn"
        onClick={handleClick}
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.25em"
          width="1.25em"
        >
          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
      </button>
      {lanShow && (
        <div className={`menu-container ${menuPosition}`}>
          {children}
        </div>
      )}
    </div>
  );
};
export default LanguagePicker;
