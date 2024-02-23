import Footer from "@/components/common/footer";
import ProjectCard from "@/components/project-card";
import { ProjectCardInfo } from "@/utils/common";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="projects grid grid-cols-2 gap-3 p-3 overflow-y-scroll h-[86.5%] scroll-smooth">
        {ProjectCardInfo.map((info) => (
          <Link to={`/project/${info.heading}`}>
            <ProjectCard key={info.id} body={info} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
