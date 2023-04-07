/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import { BsGlobeAmericas } from "react-icons/bs";

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
        <h2 className="py-4">Some things I built</h2>

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
                  src={urlFor(project.image)}
                  alt={project.name}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col w-full text-xl items-center justify-center p-10">
                <h3>
                  {project.name}
                </h3>
                <div className="p-5">
                  <Link href={project.projectPage}>
                   <BsGlobeAmericas size={24}/>
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
