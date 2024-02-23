import { useParams } from "react-router-dom";
import { ProjectDetailInfo as data } from "@/utils/common";

const ProjectDetailComponent = () => {
  const { id } = useParams();

  let idx = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase() == id?.toLowerCase()) idx = i;
  }

  return (
    <div className="scroll-style h-full overflow-y-scroll p-3">
      <div
        className="h-screen w-full bg-contain rounded-md"
        style={{ backgroundImage: `url(${data[idx].images[0]})` }}
      ></div>
    </div>
  );
};

export default ProjectDetailComponent;
