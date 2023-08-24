import React, { useEffect, useState } from "react";

import { BiSolidToTop } from "react-icons/bi";

const ScrollUpButton = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <div>
      {top && (
        <button
          className="fixed bottom-10 self-center h-10 right-2 text-4xl text-sky-200 font-bold bg-sky-500"
          onClick={scrollUp}
        >
          <BiSolidToTop />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
