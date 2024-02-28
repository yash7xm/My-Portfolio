import Header from "@/components/common/header";
import NavBar from "@/components/navbar";
import ProjectDetailComponent from "@/components/project-detail";

const ProjectDetail = () => {
  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <Header headerType={"Project Detail"} />
      <ProjectDetailComponent />
    </div>
  );
};

export default ProjectDetail;
