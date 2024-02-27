import { Menu, Sun } from "lucide-react";
import { useAtom } from "jotai";
import { sidebarAtom } from "@/atom/sidebar-atom";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useAtom<boolean>(sidebarAtom);
  return (
    <div className="flex justify-between py-4 px-3 md:hidden z-50">
      <div>Yash Poonia</div>
      <div className="flex gap-4">
        <div>
          <Sun />
        </div>
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
