import {useEffect,useRef} from 'react';

/**
 * Progressive-enhancement motion system.
 * - Scroll reveals and ambient effects are cosmetic; content stays readable without JS.
 * - The follower cursor only runs for a fine desktop pointer, never touch screens.
 * - Respect OS reduced-motion and do not intercept click, scrolling or selection.
 */
export default function ExperienceFX(){
  const cursorRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(reduced.matches || !('IntersectionObserver' in window))return;

    const targets=Array.from(document.querySelectorAll<HTMLElement>(
      '.cin-explore-card, .cin-shortcuts a, .cin-schedule-card, .cin-visit-card, .cin-visit-note, .cin-sunday, .cin-feature-panel, .cin-app-tabs button, .cin-gallery-grid figure, .royal-inner-link-grid > a'
    ));
    targets.forEach((el,i)=>{
      el.classList.add('cin-fx-reveal');
      el.style.setProperty('--cin-stagger',String((i%4)*75)+'ms');
    });
    const observer=new IntersectionObserver((entries)=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          entry.target.classList.add('cin-fx-visible');
          observer.unobserve(entry.target);
        }
      }
    },{threshold:0.08,rootMargin:'0px 0px -12px 0px'});
    document.documentElement.classList.add('cin-fx-motion');
    targets.forEach(target=>observer.observe(target));
    return ()=>{
      observer.disconnect();
      document.documentElement.classList.remove('cin-fx-motion');
      targets.forEach(el=>el.classList.remove('cin-fx-reveal','cin-fx-visible'));
    };
  },[]);

  useEffect(()=>{
    const el=cursorRef.current;
    if(!el)return;
    const fine=window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    let targetX=0,targetY=0,drawX=0,drawY=0;
    let frame=0,started=false;
    let visible=false;

    function animate(){
      if(!el)return;
      drawX+=(targetX-drawX)*0.24;
      drawY+=(targetY-drawY)*0.24;
      el.style.transform='translate3d('+(drawX-24)+'px,'+(drawY-24)+'px,0)';
      if(Math.abs(targetX-drawX)+Math.abs(targetY-drawY)>0.25)frame=requestAnimationFrame(animate);
      else frame=0;
    }

    function disable(){
      visible=false;
      started=false;
      el?.classList.remove('cin-cursor-active','cin-cursor-hover');
      document.documentElement.classList.remove('cin-fx-pointer');
      if(frame)cancelAnimationFrame(frame);
      frame=0;
    }

    function onMove(e:PointerEvent){
      if(!el||!fine.matches||reduced.matches||e.pointerType==='touch'){disable();return;}
      const t=e.target instanceof Element?e.target:null;
      const native=t?.closest('input,textarea,select,[contenteditable="true"]');
      if(native){el.classList.remove('cin-cursor-active');document.documentElement.classList.remove('cin-fx-pointer');return;}
      if(!started){drawX=e.clientX;drawY=e.clientY;started=true;}
      targetX=e.clientX;targetY=e.clientY;
      el.classList.add('cin-cursor-active');
      el.classList.toggle('cin-cursor-hover',!!t?.closest('a,button,summary,[role="button"],[role="tab"]'));
      if(!visible){document.documentElement.classList.add('cin-fx-pointer');visible=true;}
      if(!frame)frame=requestAnimationFrame(animate);
    }

    function onDown(){el?.classList.add('cin-cursor-pressed');}
    function onUp(){el?.classList.remove('cin-cursor-pressed');}
    function onLeave(e:PointerEvent){if(!e.relatedTarget)disable();}
    document.addEventListener('pointermove',onMove,{passive:true});
    document.addEventListener('pointerdown',onDown,{passive:true});
    document.addEventListener('pointerup',onUp,{passive:true});
    document.addEventListener('pointerout',onLeave,{passive:true});
    window.addEventListener('blur',disable);
    fine.addEventListener('change',disable);
    reduced.addEventListener('change',disable);
    return ()=>{
      document.removeEventListener('pointermove',onMove);
      document.removeEventListener('pointerdown',onDown);
      document.removeEventListener('pointerup',onUp);
      document.removeEventListener('pointerout',onLeave);
      window.removeEventListener('blur',disable);
      fine.removeEventListener('change',disable);
      reduced.removeEventListener('change',disable);
      disable();
    };
  },[]);

  return <div ref={cursorRef} className="cin-custom-cursor" aria-hidden="true">
    <span className="cin-cursor-aura"/>
    <span className="cin-cursor-ring"/>
    <span className="cin-cursor-core"/>
  </div>;
}
