import { Menu, Moon, Sun, X } from "lucide-react";
import { useAtom } from "jotai";
import { sidebarAtom } from "@/atom/sidebar-atom";
import { useTheme } from "@/components/common/theme-provider";
import { useState } from "react";

type Theme = "dark" | "light" | "system";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useAtom<boolean>(sidebarAtom);
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme);

  const handleThemeChange = () => {
    if (theme == "dark") {
      setTheme("light");
      setSelectedTheme("light");
    } else {
      setTheme("dark");
      setSelectedTheme("dark");
    }
  };

  return (
    <div className="flex justify-between py-4 px-3 md:hidden z-50">
      {/* name */}
      <div>Yash Poonia</div>

      {/* theme, menu */}
      <div className="flex gap-6">
        {/* theme */}
        <div className="cursor-pointer" onClick={() => handleThemeChange()}>
          {selectedTheme == "dark" ? <Moon /> : <Sun />}
        </div>

        {/* menu */}
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        >
          {showSideBar ? <X /> : <Menu />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
