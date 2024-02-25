import CustomButton from "./custom-button";
import { ButtonInfo } from "@/utils/common";
import Theme from "./theme";

const SideBar = () => {
  return (
    <div className="p-3 h-full w-[300px] flex flex-col gap-6 border-r relative">
      <div className="flex flex-col gap-8 font-mono">
        {/* Name */}
        <div className="font-700 uppercase text-sm">Yash Poonia</div>

        {/* Info */}
        <p className="text-[0.8rem] dark:text-[#FFFFFFB3] text-[#303030B3]">
          Passionate computer engineering student excelling in programming, web
          development, and software engineering.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <CustomButton body={ButtonInfo[0]} />
        <CustomButton body={ButtonInfo[1]} />
      </div>

      <Theme />
    </div>
  );
};

export default SideBar;
