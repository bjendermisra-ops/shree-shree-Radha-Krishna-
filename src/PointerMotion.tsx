import {useEffect} from 'react';

const surfaces = '.mandir-poster, .mandir-directory a, .cin-page-visual, .journal-card, .show-feature-panel';

export function PointerMotion() {
  useEffect(() => {
    const allowed = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let active: HTMLElement | null = null;
    let frame = 0, x = 0, y = 0;
    let bounds: DOMRect | null = null;
    function clear() {
      cancelAnimationFrame(frame);
      frame = 0;
      active?.removeAttribute('data-lit');
      active = null;
      bounds = null;
    }
    function paint() {
      frame = 0;
      if (!active || !bounds) return;
      const u = Math.min(1, Math.max(0,(x-bounds.left)/bounds.width));
      const v = Math.min(1, Math.max(0,(y-bounds.top)/bounds.height));
      active.style.setProperty('--pitch', (2.5-5*v)+'deg');
      active.style.setProperty('--yaw', (7*u-3.5)+'deg');
      active.style.setProperty('--beam-x', (100*u)+'%');
      active.style.setProperty('--beam-y', (100*v)+'%');
      active.dataset.lit = '';
    }
    function move(e: PointerEvent) {
      if (e.pointerType !== 'mouse' || !allowed.matches) return;
      const target = e.target instanceof Element ? e.target.closest<HTMLElement>(surfaces) : null;
      if (target !== active) {
        clear();
        active = target;
        bounds = target?.getBoundingClientRect() ?? null;
      }
      x = e.clientX;
      y = e.clientY;
      if (active && !frame) frame = requestAnimationFrame(paint);
    }
    document.addEventListener('pointermove', move, {passive:true});
    document.documentElement.addEventListener('pointerleave', clear);
    window.addEventListener('blur',clear);
    window.addEventListener('scroll',clear,{passive:true});
    allowed.addEventListener('change',clear);
    return () => {
      clear();
      document.removeEventListener('pointermove',move);
      document.documentElement.removeEventListener('pointerleave',clear);
      window.removeEventListener('blur',clear);
      window.removeEventListener('scroll',clear);
      allowed.removeEventListener('change',clear);
    };
  }, []);
  return null;
}
