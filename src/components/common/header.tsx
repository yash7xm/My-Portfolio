import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ projectDetailActive }: any) => {
  const navigate = useNavigate();
  return (
    <div className="p-3 font-mono font-700 uppercase text-xs border-b stretch">
      {projectDetailActive ? (
        <div
          className="flex justify-start items-center gap-2 w-fit cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span>
            <ArrowLeft size={16} />
          </span>
          <span>See All Projects</span>
        </div>
      ) : (
        <span> Selected Work</span>
      )}
    </div>
  );
};

export default Header;
