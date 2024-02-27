import { Menu, Sun } from "lucide-react";
import { useAtom } from "jotai";
import { sidebarAtom } from "@/atom/sidebar-atom";
import { useTheme } from "@/components/common/theme-provider";
import { useState } from "react";

type Theme = "dark" | "light" | "system";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useAtom<boolean>(sidebarAtom);
  const { setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<Theme>("system");
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");

  const handleThemeChange = () => {
    // setTheme(theme);
    // setSelectedTheme(theme);
  };

  return (
    <div className="flex justify-between py-4 px-3 md:hidden z-50">
      {/* name */}
      <div>Yash Poonia</div>

      {/* theme, menu */}
      <div className="flex gap-4">
        {/* theme */}
        <div onClick={() => handleThemeChange()}>
          <Sun />
        </div>

        {/* menu */}
        <div>
          <Menu
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
