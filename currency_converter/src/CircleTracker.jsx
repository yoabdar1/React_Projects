/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import Circle from "./Circle";

function CircleTracker() {
  const ref = useRef();
  const circleref = useRef();

  const handleMouseMove = (e) => {
    const circle = circleref.current;

    setTimeout(() => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    }, 200);
  };
  console.log("circleRef", circleref);

  //   useEffect(() => {
  //     // Ensure ref.current is not null before adding event listener

  //       ref.current.addEventListener("mousemove", handleMouseMove);

  //     // Cleanup the event listener when the component unmounts
  //     return () => {

  //         ref.current.removeEventListener("mousemove", handleMouseMove);

  //     };
  //   }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div ref={ref} onMouseMove={handleMouseMove}>
      <div className="h-screen relative">
        <Circle ref={circleref} />
      </div>
    </div>
  );
}

export default CircleTracker;
