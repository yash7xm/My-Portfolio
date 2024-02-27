import { useTheme } from "@/components/common/theme-provider";
import { useState } from "react";

type Theme = "dark" | "light" | "system";

const Theme = () => {
  const { setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<Theme>("system");

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setSelectedTheme(theme);
  };

  return (
    <div className="hidden md:flex uppercase font-400 font-mono text-xs border-t bottom-0 absolute w-full left-0 p-3">
      <span
        className={`cursor-pointer ${
          selectedTheme === "dark" ? "text-dark" : "text-muted-foreground"
        }`}
        onClick={() => handleThemeChange("dark")}
      >
        Dark
      </span>
      <span className="text-muted-foreground"> / </span>
      <span
        className={`cursor-pointer ${
          selectedTheme === "light" ? "text-dark" : "text-muted-foreground"
        }`}
        onClick={() => handleThemeChange("light")}
      >
        Light
      </span>
      <span className="text-muted-foreground"> / </span>
      <span
        className={`cursor-pointer ${
          selectedTheme === "system" ? "text-dark" : "text-muted-foreground"
        }`}
        onClick={() => handleThemeChange("system")}
      >
        System
      </span>
    </div>
  );
};

export default Theme;
