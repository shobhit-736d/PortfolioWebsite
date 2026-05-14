import { useMemo, useState, useCallback } from 'react';
import { CursorContext } from './cursorContext';

export function CursorProvider({ children }) {
  const [interactive, setInteractive] = useState(false);

  const setInteractiveHover = useCallback((value) => {
    setInteractive(value);
  }, []);

  const handlers = useMemo(
    () => ({
      onMouseEnter: () => setInteractiveHover(true),
      onMouseLeave: () => setInteractiveHover(false),
    }),
    [setInteractiveHover],
  );

  const value = useMemo(
    () => ({ interactive, setInteractiveHover, handlers }),
    [interactive, setInteractiveHover, handlers],
  );

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}
