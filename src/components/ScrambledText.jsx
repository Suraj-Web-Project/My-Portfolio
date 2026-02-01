import React, { useState, useEffect } from 'react';

const ScrambledText = ({ texts, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  const scrambleText = (targetText, callback) => {
    setIsScrambling(true);
    let iterations = 0;
    const maxIterations = targetText.length;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsScrambling(false);
        if (callback) callback();
      }

      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const cycleTexts = () => {
      const targetText = texts[currentIndex];
      scrambleText(targetText, () => {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      });
    };

    cycleTexts();
  }, [currentIndex, texts]);

  return (
    <span className={`${className} ${isScrambling ? 'text-cyan-400' : 'text-pink-400'} transition-colors duration-300`}>
      {displayText}
    </span>
  );
};

export default ScrambledText;