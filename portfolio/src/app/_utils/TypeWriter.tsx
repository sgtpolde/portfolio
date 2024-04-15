import { useState, useEffect } from 'react';

const useTypewriter = (
  text: string,
  typingSpeed = 2,
  deletingSpeed = 100,
  startDelay = 1000,
  endDelay = 1000
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      if (!deleting && index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeoutId);
      } else if (deleting && index > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeoutId);
      } else if (index === 0) {
        setDeleting(false);
      } else if (index === text.length) {
        setTimeout(() => setDeleting(true), endDelay);
      }
    };

    const initialDelay = setTimeout(() => {
      type();
    }, startDelay);

    return () => clearTimeout(initialDelay);
  }, [index, deleting, text, typingSpeed, deletingSpeed, startDelay, endDelay]);

  return displayedText;
};

export default useTypewriter;
