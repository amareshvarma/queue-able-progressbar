import { useEffect, useState } from "react";

const ProgressBar = ({ shouldAnimate, onFill }) => {
  const [startAnimate, setStartAnimate] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;
    setStartAnimate(true);
  }, [shouldAnimate]);
  return (
    <div className="bar">
      <div
        className={`content ${startAnimate ? "fill" : ""} `}
        onTransitionEnd={onFill}
      ></div>
    </div>
  );
};

export default ProgressBar;
