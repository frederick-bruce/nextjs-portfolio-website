import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Frederick | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Frederick Bruce</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/frederickbruce/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/frederick-bruce"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
            <Link href="/#" legacyBehavior>
              <p className="cursor-pointer">
                <HiHome size={20} />
              </p>
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Meta Front End Development</span>
            <span className="px-2">|</span>Meta Front End Certification
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Freelance</span>
            <span className="px-2">|</span>Portland, ME
          </p>
          <p className="py-1 italic">
            Front End Web Developer & Web Master (2021 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <h5 className="text-center underline text-[18px] py-4">
            Education & Certification
          </h5>
          <p className="italic">
            <span className="font-bold italic">
              Meta Front-End Developer Certification | Coursera
            </span>
            <span className="px-2">|</span>Portland, ME
          </p>
          <p className="py-1 italic">Code Collaboration - (2021 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Engaged in collaborative learning with a senior developer to
              discuss concepts, gain an insight to the day-to-day of a
              developer, and learn multiple best practices.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CITY OF Ware, MA</span>
            <span className="px-2">|</span>Ware, MA
          </p>
          <p className="py-1 italic">GameStop / Management (2017 – 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured proper implementation of daily operating procedures and
              practices including customer engagement, customer satisfaction,
              maximizing profit.
            </li>
            <li>
              Oversaw a team of 6+ to comprehensive understanding, operation,
              and execution of best practices in sales, customer engagement,
              customer satisfaction and operational procedures were followed.
            </li>
            <li>
              Led weekly performance meetings to discuss sales metrics and
              strategize to improve sales for the upcoming week. Core Metrics
              increased by 20% weekly.
            </li>
            <li>
              Placed 3rd place in company during B2G1 sale. Increased pre-owned
              sales metric by 280% for the two-week sale.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
