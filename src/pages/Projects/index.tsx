import Footer from "@/components/common/footer";
import ProjectCard from "@/components/project-card";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="projects grid grid-cols-2 gap-2 p-3 overflow-y-scroll h-[86.5%] scroll-smooth">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
