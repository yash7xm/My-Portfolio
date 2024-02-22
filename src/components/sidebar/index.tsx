import CustomButton from "./custom-button";
import { ButtonInfo } from "@/utils/common";

const SideBar = () => {
  return (
    <div className="p-3 h-full w-80 flex flex-col gap-6 border border-l border-slate-200">
      <div className="flex flex-col gap-8">
        {/* Name */}
        <div className="font-700 uppercase text-sm font-mono">Yash Poonia</div>

        {/* Info */}
        <p className="text-sm text-muted-foreground">
          Passionate computer engineering student excelling in programming, web
          development, and software engineering.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <CustomButton body={ButtonInfo[0]} />
        <CustomButton body={ButtonInfo[1]} />
      </div>
    </div>
  );
};

export default SideBar;
