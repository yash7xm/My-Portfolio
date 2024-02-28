import Footer from "@/components/common/footer";
import ProjectCard from "@/components/project-card";
import { ProjectCardInfo } from "@/utils/common";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="scroll-style grid lg:grid-cols-2 grid-cols-1 gap-3 p-3 overflow-y-scroll h-[86.5%] scroll-smooth">
        {ProjectCardInfo.map((info) => (
          <Link key={info.id} to={`/project/${info.heading}`}>
            <ProjectCard key={info.id} body={info} />
          </Link>
        ))}
        <div className="md:hidden">
          <Footer />
        </div>
      </div>
      <div className="hidden md:flex w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
