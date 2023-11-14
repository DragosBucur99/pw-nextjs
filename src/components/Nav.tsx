import { useEffect, useState } from "react";

export default function Nav() {
  // const scrollThreshold = 100;

  // const [isVisible, setIsVisible] = useState(true);
  // const [prevScrollY, setPrevScrollY] = useState(0);
  // const [direction, setDirection] = useState({ face: "", pos: 0 });

  // useEffect(() => {
  //   // Function to handle the scroll event
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > prevScrollY) {
  //       if (direction.face !== "down")
  //         setDirection({ face: "down", pos: currentScrollY });
  //     } else if (currentScrollY < prevScrollY) {
  //       if (direction.face !== "up")
  //         setDirection({ face: "up", pos: currentScrollY });
  //     }

  //     if (
  //       direction.face === "down" &&
  //       currentScrollY - direction.pos > scrollThreshold
  //     ) {
  //       setIsVisible(false);
  //     }

  //     if (
  //       direction.face === "up" &&
  //       direction.pos - currentScrollY > scrollThreshold - 80
  //     ) {
  //       setIsVisible(true);
  //     }
  //     // Update the previous scroll position
  //     setPrevScrollY(currentScrollY);
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollY, direction]); // Include prevScrollY as a dependency

  return (
    <nav className="hidden flex-wrap shadow-md sticky items-center top-10 text-lg justify-between w-full p-5 rounded-md bg-neutral-900 lg:flex">
      <span className="flex items-center gap-3">
        <div className="rounded-full w-3 h-3 bg-green-400"></div>Available to
        work
      </span>
      <ul className="flex gap-10">
        <li className="highlight-nav">Home</li>
        <li>About</li>
        <li>App</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
