import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { sidebarAtom } from "@/atom/sidebar-atom";

export interface ButtonProps {
  body?: {
    title: string;
    desc: string;
    linkTo: string;
    img: string;
  };
}

const CustomButton: React.FC<ButtonProps> = ({ body }) => {
  const [showSideBar, setShowSideBar] = useAtom<boolean>(sidebarAtom);

  let location = useLocation();
  const [highlightBorder, setBorder] = useState("");

  function handleShowSidebar() {
    if(window.innerWidth < 768){
      setShowSideBar(!showSideBar);
    }
    return;
  }

  useEffect(() => {
    setBorder(location.pathname.split("/")[1]);
  }, [location.pathname]);

  useEffect(() => {
    if (
      location.pathname.split("/")[1] == body?.linkTo.substring(1) ||
      (location.pathname.split("/")[1] == "project" &&
        body?.linkTo.substring(1) == "")
    ) {
      setBorder("dark:border-white light:border-black");
    } else {
      setBorder("");
    }
  }, [location.pathname, body?.linkTo]);

  return (
    <Link
      to={body?.linkTo || "/"}
      className={`w-full border rounded p-3 cursor-pointer flex gap-4 ${highlightBorder}`}
      onClick={handleShowSidebar}
    >
      {/* Image */}
      <Avatar className="rounded-md">
        <AvatarImage src={body?.img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Text */}
      <div>
        {/* Name */}
        <div className="font-700 text-sm">{body?.title}</div>

        {/* Info */}
        <p className="text-xs text-muted-foreground">{body?.desc}</p>
      </div>
    </Link>
  );
};

export default CustomButton;
