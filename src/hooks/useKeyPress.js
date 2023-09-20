import { useEffect } from 'react';

const useKeyPress = (targetKey, callback) => {
  const handleKeyDown = (e) => {
    if (e.key === targetKey) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
};

export default useKeyPress;
