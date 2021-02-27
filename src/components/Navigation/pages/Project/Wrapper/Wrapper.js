import React from "react";
import "./wrapperStyle.css";
import ProjectCard from '../ProjectCard/ProjectCard';


//  function Wrapper(props) {
//    return <div className="wrapper">{props.children}</div>;
//  };

const Wrapper = ({ images }) => {
  const imageArray = images && images.map((image, i) => {
    return <ProjectCard image={image} key={i} />;
  });

  return (
    <div id="wrapper">
      {imageArray}
    </div>
  )
};

export default Wrapper;