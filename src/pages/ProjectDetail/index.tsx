import Header from "@/components/common/header";
import ProjectDetailComponent from "@/components/project-detail";

const ProjectDetail = () => {
  return (
    <div className="h-full flex flex-col">
      <Header projectDetailActive={true} />
      <ProjectDetailComponent />
    </div>
  );
};

export default ProjectDetail;
