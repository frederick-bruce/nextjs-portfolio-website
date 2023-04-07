import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/client";

const ProjectItem = ({ slug, image, projectPage, name }) => {
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <div className="project-card-img max-h-48 rounded">
          <Image
            src={urlFor(image)}
            alt={image}
            width={250}
            height={250}
            className="flex"
          />
          <p>{name}</p>
        </div>
      </Link>
      <div>
        <Link href={`/projectPage/${projectPage}`}>
          <div>
            {name}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
