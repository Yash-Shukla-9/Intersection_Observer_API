import { useEffect, useRef, useState } from "react";

const Image = ({ image, id }) => {
  const ref = useRef();
  const [insert, setInsert] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInsert(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      //   observer.unobserve(ref.current);
      observer.disconnect();
    };
  });

  return insert ? (
    <img src={image} alt="all" className="w-[600px] h-[1500px]" />
  ) : (
    <div>
      <img ref={ref} className="w-[600px] h-[1500px] bg-red-200" />
    </div>
  );
};

export default Image;
