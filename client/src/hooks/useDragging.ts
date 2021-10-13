import { RefObject, useEffect, useRef, useState } from 'react';

const useDragging = (
  id: string
): [ref: RefObject<HTMLDivElement>, x: number, y: number, isDragging: boolean] => {
  const [isDragging, setIsDragging] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent) {
    if (!isDragging || !ref.current) return;
    setPos({
      x: e.x,
      y: e.y,
    });
    e.stopPropagation();
    e.preventDefault();
  }

  function onMouseUp(e: MouseEvent) {
    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
  }

  function onMouseDown(e: MouseEvent) {
    if (e.button !== 0 || !ref.current) return;
    setIsDragging(true);

    setPos({
      x: e.x,
      y: e.y,
    });

    e.stopPropagation();
    e.preventDefault();
  }

  useEffect(() => {
    const savePosition = sessionStorage.getItem(`position_${id}`);
    if (savePosition) {
      setPos(JSON.parse(savePosition));
    }
  }, []);

  // When the element mounts, attach an mousedown listener
  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener('mousedown', onMouseDown);

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener('mousedown', onMouseDown);
    };
  }, [ref.current]);

  // Everytime the isDragging state changes, assign or remove
  // the corresponding mousemove and mouseup handlers
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
    } else {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

    sessionStorage.setItem(`position_${id}`, JSON.stringify(pos));

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging]);

  return [ref, pos.x, pos.y, isDragging];
};

export default useDragging;
