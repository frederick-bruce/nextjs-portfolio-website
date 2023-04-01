/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../client";
// import Card from "./UI/Card/Card";
import IconArrowRightCircleFill from "./icons/RightArrow";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import FlipCard from "./card/FlipCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  // const [flip, setFlip] = useState(false);

  // const flipBtn = document.querySelector(".flip-btn");
  // const card = document.querySelector(".card-container");

  // flipBtn.addEventListener("click", function () {
  //   card.classList.toggle("flipped");
  // });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(
          projects.filter((project) => project.tags?.includes(item))
        );
      }
    }, 500);
  };

  // <style>
  //   <div className="card-container">
  //     @apply transition-transform
  //   </div>
  // </style>

  // function flip() {
  //   <div className="animate__animated animate__flipInY">
  //     <h1>Car</h1>
  //   </div>

  //   console.log("flip")
  // }

  return (
    <div id="projects" className="w-full md:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-36">
        <p className="text-xl tracking-widest uppercase text-[#27a2bd]">
          Projects
        </p>
        <h2 className="py-4">Tech Stacks & Frameworks</h2>

        <div className="project-filter">
          {["React JS", "Next JS", "MERN", "In Development", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleProjectFilter(item)}
                className={`project-filter-item ${
                  activeFilter === item ? "active-filter" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="project-portfolio"
        >
          {filterProject.map((project, index) => (
            <div className="project-card-item" key={index}>
              <div className="project-card-img">
                <img src={urlFor(project.imgUrl)} alt={project.name} />
              </div> */}

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filterProject.map((project, index) => (
            <div
              className="
              project-card-item
              bg-gradient-to-tr from-[#1e7f94] to-[#0e3a43]
             text-white
              rounded-2xl
              "
              key={index}
            >
              <div className="project-card-img max-h-48 rounded-0">
                <img
                  src={urlFor(project.imgUrl)}
                  alt={project.name}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="flex flex-col w-full text-xl items-center justify-center p-10">
                  {project.title}
                </h3>

                {/* <div className="relative">
                  <BsFillArrowRightCircleFill className="arrow-icon text-2xl absolute bottom-4 right-4" />
                </div> */}

                <div className="relative">
                  <div>
                    <button>
                      {/* <BsFillArrowRightCircleFill className="arrow-icon text-xl absolute bottom-4 right-4"></BsFillArrowRightCircleFill> */}
                      <FlipCard/>
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="card-container relative w-80 h-80 bg-white rounded-lg shadow-md transition ">
                <div className="front absolute w-full h-full bg-blue-500 rounded-lg flex justify-center items-center">
                  <h2 className="text-2xl text-white font-bold">
                    Front of Card
                  </h2>
                </div>
                <div className="back absolute w-full h-full bg-green-500 rounded-lg flex justify-center items-center transform rotate-y-180">
                  <h2 className="text-2xl text-white font-bold">
                    Back of Card
                  </h2>
                </div>
                <button className="flip-btn absolute bottom-5 right-5 py-2 px-4 rounded-lg bg-blue-500 text-white font-bold">
                  Flip Card
                </button>
              </div> */}

              {/* <div className="project-card">
                <div className="project-card-links">
                  <Link
                    href={{ pathname: project.projectPage }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillEye size={28} />
                  </Link>
                </div>
                <div>
                  <Link
                    href={{ pathname: project.codeLink }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-card-links">
                      <AiFillGithub size={28} />
                    </div>
                  </Link>
                </div>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="grid md:grid-cols-2 gap-8">
  <ProjectItem
    title="Property Finder"
    backgroundImg={propertyImg}
    projectUrl="/property"
    tech="React JS"
  />
  <ProjectItem
    title="Crypto App"
    backgroundImg={cryptoImg}
    projectUrl="/crypto"
    tech="React JS"
  />
  <ProjectItem
    title="Netflix App"
    backgroundImg={netflixImg}
    projectUrl="/netflix"
    tech="React JS"
  />
  <ProjectItem
    title="Twitch UI"
    backgroundImg={twitchImg}
    projectUrl="/twitch"
    tech="Next JS"
  />
</div> */
}
