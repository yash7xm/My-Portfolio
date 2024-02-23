import Header from "@/components/common/header";
import ProjectDetailComponent from "@/components/project-detail";

const ProjectDetail = () => {
  return (
    <div>
        <Header projectDetailActive = {true}/>
        <ProjectDetailComponent /> 
    </div>
  )
};

export default ProjectDetail;
