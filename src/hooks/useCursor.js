import { useContext } from 'react';
import { CursorContext } from '../context/cursorContext';

export function useCursorContext() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    return {
      interactive: false,
      setInteractiveHover: () => {},
      handlers: { onMouseEnter: undefined, onMouseLeave: undefined },
    };
  }
  return ctx;
}

export function useCursorInteractive() {
  return useCursorContext().handlers;
}
