import { MoveRight } from "lucide-react";
import "../../styles/project-card.css";

export interface ProjectCardProps {
  body?: {
    id: number;
    img: string;
    heading: string;
    subHeading: string;
    description: string;
    year: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ body }) => {
  return (
    <div className="group w-full h-[50vh] cursor-pointer">
      <div className="project-card-image bg-slate-900 h-[80%] rounded-md py-[3%] px-[10%]">
        <div
          className="int-image 
          bg-contain transition duration-300 ease-in-out 
          group-hover:scale-105 
          h-full w-full rounded-md
          "
          style={{ backgroundImage: `url(${body?.img})` }}
        ></div>
      </div>

      <div className="flex h-[20%] items-center text-[0.65rem] w-full px-2">
        <div className="w-[20%]">
          <div className="uppercase">{body?.heading}</div>
          <div className="text-muted-foreground">{body?.subHeading}</div>
        </div>

        <div className="text-muted-foreground font-mono w-[68%] px-1">
          <i>{body?.description}</i>
        </div>
        <div className="w-[12%] flex justify-between pr-2 relative">
          <span className="absolute right-0 transition-all duration-200 ease-linear group-hover:right-5">
            {body?.year}
          </span>
          <span className="text-muted-foreground opacity-0 transition-all duration-200 ease-linear group-hover:opacity-100 absolute right-0">
            <MoveRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
