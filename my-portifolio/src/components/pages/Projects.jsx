import React, { useEffect, useState } from "react";
import "./Projects.css";
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { FaGithubAlt, FaMousePointer } from "react-icons/fa";

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import CarRentalz2 from "../../images/CarRentalz2.png";
import PrestigePalaces from "../../images/PrestigePalaces.png";

SwiperCore.use([Navigation, Pagination]);

function Projects() {

  const images =
    [
      {
        id: CarRentalz2,
        title: "Car Rentalz",
        link: "https://car-rentalz-i1e6.vercel.app/",
        githubLink: "https://github.com/VictorSchmoegel/car-rentalz/tree/main/car-rentalz",
        description: "Discover Car Rentalz, where JavaScript and React come together to offer you a seamless car rental experience. Explore our modern platform and find the perfect ride for your journey with ease."
      },
      {
        id: PrestigePalaces,
        link: "https://prestige-palaces-gpq1.onrender.com/",
        githubLink: "https://github.com/VictorSchmoegel/Prestige-Palaces",
        description: "Welcome to PrestigePalaces, a MERN application where MongoDB, Express, React, Node.js, Tailwind CSS, and other technologies converge to redefine luxury real estate. Explore our collection of homes and experience the pinnacle of modern living."
      },
      {
        id: image3,
        description: "In Progress..."
      },
      {
        id: image4,
        description: "In Progress..."
      },
      {
        id: image1,
        description: "In Progress..."
      },
      {
        id: image2,
        description: "In Progress..."
      },
    ];

  const [swiper, setSwiper] = useState(2);
  console.log(setSwiper);

  useEffect(() => {
    const handlerResize = () => {
      if (window.innerWidth < 1251) {
        setSwiper(1);
      } else {
        setSwiper(2);
      }
    };
    handlerResize();
    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    }
  }, [swiper]);

  return (
    <section id="projects">
      <div className="container_projects">
        <div className="title_main">
          <h2 className="projects_title">Major Projects</h2>
        </div>
        <Swiper
          slidesPerView={swiper}
          navigation
          pagination={{ clickable: true }}
          className="content_projects"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="itens">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.id}
                  alt="project_image"
                  style={{ width: '100%', height: '70%' }}
                />
              </a>
              <div className="links">
                <div className="links_div">
                  <a href={image.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> <FaGithubAlt /> GitHub
                  </a>
                  <a href={image.link} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> <FaMousePointer /> Live
                  </a>
                </div>
                <p>{image.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;