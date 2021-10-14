import { RefObject, useEffect, useRef, useState } from 'react';

const useDragging = (
  id: string
): [ref: RefObject<HTMLDivElement>, x: number, y: number, isDragging: boolean] => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0 || !ref.current) return;

    setMouse({
      x: e.x,
      y: e.y,
    });

    setIsDragging(true);

    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !ref.current) return;

    let x = pos.x + e.x - mouse.x;
    let y = pos.y + e.y - mouse.y;

    if (window.innerWidth - ref.current.clientWidth < x) {
      x = window.innerWidth - ref.current.clientWidth;
    } else if (x < 0) {
      x = 0;
    }

    if (window.innerHeight - ref.current.clientHeight < y) {
      y = window.innerHeight - ref.current.clientHeight;
    } else if (y < 0) {
      y = 0;
    }

    setPos({
      x,
      y,
    });

    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e: MouseEvent) => {
    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    const savePosition = localStorage.getItem(`position_${id}`);
    if (savePosition) {
      setPos(JSON.parse(savePosition));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`position_${id}`, JSON.stringify(pos));
  }, [pos]);

  useEffect(() => {
    if (!ref.current) return;

    const target: HTMLDivElement | null =
      ref.current.querySelector('[data-draggable=target]') || ref.current;
    if (target) {
      target.addEventListener('mousedown', onMouseDown);
    }

    return () => {
      if (!target) return;
      target.removeEventListener('mousedown', onMouseDown);
    };
  }, [ref.current]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
    } else {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging]);

  return [ref, pos.x, pos.y, isDragging];
};

export default useDragging;
