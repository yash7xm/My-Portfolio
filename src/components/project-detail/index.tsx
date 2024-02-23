import { useParams } from "react-router-dom";

const ProjectDetailComponent = () => {
  const { id } = useParams();
  return <>Project Detail {id}</>;
};

export default ProjectDetailComponent;
