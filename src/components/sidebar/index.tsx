import Custom_Button from "./custom-button";

const SideBar = () => {
  return (
    <div className="p-3 h-full w-1/4 flex flex-col gap-6">
      <div className="flex flex-col gap-8">
        {/* Name */}
        <div className="font-700 uppercase text-sm">Yash Poonia</div>

        {/* Info */}
        <p className="text-sm text-muted-foreground">
          Passionate computer engineering student excelling in programming, web
          development, and software engineering.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <Custom_Button />
        <Custom_Button />
        <Custom_Button />
      </div>
    </div>
  );
};

export default SideBar;
