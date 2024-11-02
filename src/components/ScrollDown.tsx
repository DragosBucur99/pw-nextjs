import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollDown() {
  const circle = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(circle.current, { y: 20, opacity: 0, repeat: -1, duration: 1.5 });
  }, []);
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6rem] gap-2 items-center text-base justify-center opacity-60 hidden lg:flex">
      <span>Scroll</span>
      <div className="w-6 h-12 border-2 border-slate-100 rounded-full relative">
        <div
          ref={circle}
          className="w-2 h-2 bg-slate-100 rounded-full absolute top-[.5rem] left-1/2 -translate-x-1/2"
        />
      </div>
      <span>Down</span>
    </div>
  );
}
