"use client";
import Brochure from "../../components/Brochure/Brochure";
import NotePaper from "../../components/NotePaper/NotePaper";
import PinnedPaper from "../../components/PinnedPaper/PinnedPaper";
import PinnedPaperGreen from "../../components/PinnedPaperGreen/PinnedPaperGreen";
import StickyPaper from "../../components/StickyPaper/StickyPaper";
import { motion, useScroll } from "framer-motion";
import { projects } from "../../constants/projects";

export default function Home() {
  const { scrollYProgress } = useScroll();
  // landing page
  return (
    <main className="flex min-h-screen flex-col justify-between mx-10">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <section className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row items-center justify-between">
        <PinnedPaperGreen />
        <StickyPaper />
        <PinnedPaper />
      </section>

      <section className="my-10">
        <Brochure />
      </section>
      <p className="flex flex-row justify-center">WORK AND EXPERIENCE</p>
      <section className="flex flex-wrap justify-around mb-3">
        {projects.map((project, i) => (
          <div key={i}>
            <NotePaper
              company={project.company}
              website={project.website}
              project={project.project}
              desc={project.desc}
              timeframe={project.timeframe}
              title={project.title}
              work={project.work}
              tech={project.tech}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
