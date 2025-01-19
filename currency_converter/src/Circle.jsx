/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {forwardRef} from "react";

const Circle = forwardRef((props, ref) =>{
  return (
    <div
      className="h-[40px] w-[40px] rounded-full bg-red-800 absolute"
      style={{ left: 0, top: 0 }}
      ref={ref}
    >
      
    </div>
  );
})

export default Circle;
