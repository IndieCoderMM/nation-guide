import { useEffect, useState } from 'react';

const useDebouncedState = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return [debouncedValue, setValue];
};

export default useDebouncedState;
