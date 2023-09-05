import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [barsCount, setBarsCount] = useState(0);
  const [barsFilled, setBarsFilled] = useState(0);
  return (
    <div className="App">
      <button
        className="btn-progress-bar"
        onClick={() => setBarsCount(barsCount + 1)}
      >
        Add++
      </button>
      {Array.from({ length: barsCount }).map((item, index) => (
        <ProgressBar
          key={index}
          shouldAnimate={index <= barsFilled}
          onFill={() => setBarsFilled(barsFilled + 1)}
        />
      ))}
    </div>
  );
}
