import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ headerType }: any) => {
  const navigate = useNavigate();
  return (
    <div className="text-center md:text-start p-3 font-mono font-700 uppercase text-xs md:border-b stretch">
      {headerType == "Project Detail" ? (
        <div
          className="flex mx-auto md:mx-0 md:justify-start items-center gap-2 w-fit cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span>
            <ArrowLeft size={16} />
          </span>
          <span>See All Projects</span>
        </div>
      ) : headerType == "About" ? (
        <span>About Me</span>
      ) : (
        <span> Selected Work</span>
      )}
    </div>
  );
};

export default Header;
