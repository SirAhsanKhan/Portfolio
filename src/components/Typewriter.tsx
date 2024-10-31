import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const el = useRef(null);
  const typedInstance = useRef(null); // To hold the typed.js instance

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: [
        "Full-stack developer.",
        "UI/UX Designer.",
        "Your one-stop solution.",
      ], // Dynamic text
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  // Function to stop animation on hover
  const handleMouseEnter = () => {
    typedInstance.current.stop();
  };

  // Function to resume animation when hover ends
  const handleMouseLeave = () => {
    typedInstance.current.start();
  };

  return (
    <span
      ref={el}
      className="text-[#fbbf24]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></span>
  );
};

export default Typewriter;
