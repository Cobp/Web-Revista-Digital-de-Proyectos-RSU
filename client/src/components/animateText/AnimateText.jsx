import { useState, useEffect } from 'react';

const AnimatedText = ({ text, velocity, color }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, velocity);

    return () => clearInterval(interval);
  }, [text, velocity]);

  return (
    <>
    <p className="animated-text">{displayText}</p>
    <style>
        {`
            .animated-text {
              position: absolute;
              font-family: sans-serif;
              width: 200px;
              height: 80px;
              top: 60px;
              right: -100%;
              font-size: 90px;
              line-height: 70px;
              font-weight: bold;
              background: linear-gradient(to left, var(--color-rojo2)0%, var(--color-salmon5)60%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              transform: rotate(90deg);
              cursor: default;
              z-index: 0;
              }
              .animated-text::before{
                content: '';
                position: absolute;
                width: 200px;
                height: 6px;
                background: linear-gradient(to left, var(--color-rojo2), var(--color-salmon5));
                top: 73px;
                left: 0;
                border-radius: 2px;
                z-index: -1;
              }
        `}
    </style>
    </>
  );
};

export default AnimatedText;