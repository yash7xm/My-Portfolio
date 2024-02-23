import { MoveRight } from "lucide-react";
import "../../styles/project-card.css";

const ProjectCard = () => {
  return (
    <div className="w-full h-[50vh] cursor-pointer">
      <div className="project-card-image bg-slate-900">
        <div className="int-image bg-cover bg-center transition duration-300 ease-in-out hover:scale-105"></div>
      </div>

      <div className="flex h-[20%] items-center text-[0.65rem] w-full">
        <div className="w-[30%]">
          <div className="uppercase">Vyzon</div>
          <div className="text-muted-foreground">Programming Language</div>
        </div>

        <div className="text-muted-foreground font-mono w-[58%]">
          Crafted a dynamic programming language: Revolutionizing programming
          with Vyzon
        </div>
        <div className="w-[12%] flex justify-between pr-2">
          <span>2023</span>
          <span className="text-muted-foreground">
            <MoveRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
