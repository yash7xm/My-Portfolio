import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex overflow-hidden bg-white dark:bg-primary-bg">
      <div className="w-full md:w-[300px] -z-1 hidden md:flex">
        <SideBar />
      </div>
      <div className="h-screen relative w-full md:flex-1 z-1)">{children}</div>
    </div>
  );
};

export default Layout;
