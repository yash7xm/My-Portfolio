import CustomButton from "./sidebar-button";
import { ButtonInfo } from "@/utils/common";
import Theme from "./theme";
import { useSetAtom } from "jotai";
import { sidebarAtom } from "@/atom/sidebar-atom";
import { useEffect } from "react";

const SideBar = () => {
  const setShowSideBar = useSetAtom<any>(sidebarAtom);

  useEffect(() => {
    const handleResize = () => {
      setShowSideBar(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setShowSideBar]);

  return (
    <div
      className="md:p-3 px-8 h-full w-full md:border-r relative bg-white dark:bg-primary-bg
                 flex flex-col gap-6 justify-center md:justify-start"
    >
      <div className="md:flex-col md:gap-8 font-mono hidden md:flex">
        {/* Name */}
        <div className="font-700 uppercase text-sm">Yash Poonia</div>

        {/* Info */}
        <p className="text-[0.8rem]">
          Passionate computer engineering student excelling in programming, web
          development, and software engineering.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:gap-2 gap-4">
        <CustomButton body={ButtonInfo[0]} />
        <CustomButton body={ButtonInfo[1]} />
      </div>

      <Theme />
    </div>
  );
};

export default SideBar;
