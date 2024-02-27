import SideBar from "./sidebar";
import { useAtomValue } from "jotai";
import { sidebarAtom } from "@/atom/sidebar-atom";

const Layout = ({ children }: any) => {
  const showSideBar = useAtomValue<boolean>(sidebarAtom);

  return (
    <div className="h-screen flex overflow-hidden bg-white dark:bg-primary-bg relative">
      {/* Sidebar */}
      <div
        className="w-full md:w-[300px] -z-1 md:flex absolute h-full"
        style={{
          display: showSideBar ? "flex" : "none",
          zIndex: showSideBar ? "10" : "-1",
        }}
      >
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="h-screen w-full md:flex-1 z-1 absolute">{children}</div>
    </div>
  );
};

export default Layout;
