import { useParams } from "react-router-dom";
import { ProjectDetailInfo as data } from "@/utils/common";

const ProjectDetailComponent = () => {
  const { id } = useParams();

  let idx = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase() == id?.toLowerCase()) idx = i;
  }

  return (
    <div className="scroll-style overflow-y-scroll p-3">
      {/* main image */}
      <div
        className="h-screen w-full bg-contain rounded-md"
        style={{ backgroundImage: `url(${data[idx].images[0]})` }}
      ></div>

      {/* key point descriptions */}
      <div className="bg-secondary-bg h-3/4 mt-4 rounded-md p-4">
        {/* heading */}
        <div className="text-xl uppercase w-4/5 font-mono">
          <span>{data[idx].name} </span>
          <span className="text-muted-foreground">{data[idx].description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailComponent;
