import React from "react";
import Box from "./Box";
const Boxes = () => {
  return (
    <div>
      <p>This is my home page</p>
      <div>
        <Box name="Maria" title="CEO" age="29" />
        <Box name="Anjula" title="Developer" age="31" />
        <Box name="Mary" title="Designer" age="28" />
      </div>
    </div>
  );
};
export default Boxes;
