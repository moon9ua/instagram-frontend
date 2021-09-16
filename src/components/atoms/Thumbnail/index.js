import React from "react";

const Thumbnail = ({ className, id, src }) => {
  return <img className={className} id={id} src={src} />;
};

export default Thumbnail;
