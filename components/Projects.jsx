/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

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
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="project-portfolio"
        >
          {filterProject.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-img">
                <img src={urlFor(project.imgUrl)} alt={project.name} />
              </div>

              <div className="bold-text mx-auto my-2 p-2">
                <h3>{project.title}</h3>
              </div>
              <div className="project-links">

              <div className="project">
                <Link
                  href= {{pathname:project.projectPage}}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <AiFillEye size={28} />
                </Link>
              </div>
              <div>
                <Link href={{ pathname:project.codeLink}} target="_blank" rel="noreferrer">
                  <div className="project">
                    <AiFillGithub size={28} />
                  </div>
                </Link>
                  </div>
              </div>
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
