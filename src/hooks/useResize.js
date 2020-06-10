import { useEffect, useState } from "react";

const useResize = ref => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return { width, height };
};

export default useResize;
