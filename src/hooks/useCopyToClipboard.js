import { useCallback, useEffect, useState } from 'react';

const useCopyToClipboard = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = useCallback((text) => {
    if (typeof text === 'string' || typeof text === 'number') {
      navigator.clipboard.writeText(text.toString()).catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Could not copy text: ', err);
      });
      setHasCopied(true);
    } else {
      setHasCopied(false);
      // eslint-disable-next-line no-console
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`,
      );
    }
  }, []);

  useEffect(() => {
    if (!hasCopied) return;
    const id = setTimeout(() => {
      setHasCopied(false);
    }, 2000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(id);
  }, [hasCopied]);

  return [copyToClipboard, hasCopied];
};

export default useCopyToClipboard;
