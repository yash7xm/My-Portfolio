import Header from "@/components/common/header";
import ProjectDetailComponent from "@/components/project-detail";

const ProjectDetail = () => {
  return (
    <div className="h-full flex flex-col">
      <Header headerType={"Project Detail"} />
      <ProjectDetailComponent />
    </div>
  );
};

export default ProjectDetail;
