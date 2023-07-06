import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import {motion} from "framer-motion";

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";

function Projects() {

  const images = 
  [ 
    {
      id: image1,
      title: "texto da imagem 1"
    },
    {
      id: image2,
      title: "texto da imagem 2"
    },
    {
      id: image3,
      title: "texto da imagem 3"
    },
    {
      id: image4,
      title: "texto da imagem 4"
    },
    {
      id: image1,
      title: "texto da imagem 1"
    },
  ];

  const carrocel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carrocel.current?.scrollWidth - carrocel.current?.offsetWidth);
  }, [])

  return (
    <section id="projects">
      <div className="container_projects">
        <div className="title_main">
          <h2 className="projects_title">Projects</h2>
        </div>
        <motion.div ref={carrocel} className="content_projects" whileTap={{ cursor: "grabbing" }}>
          <motion.div className="projects_img" drag="x" dragConstraints={{ right: 0, left: -width }}>

           {images.map((image => (
            <motion.div key={image} className="itens">
              <img src={image.id} alt="project_image" />
              <p>{image.title}</p>
            </motion.div>
           )))}

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;