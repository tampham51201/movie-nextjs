import React, { useEffect } from "react";

const ScrollTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>{props.children}</div>;
};

export default ScrollTop;
