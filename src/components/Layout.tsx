import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex overflow-hidden">
      <SideBar />
      <div className="h-screen flex-1 relative">{children}</div>
    </div>
  );
};

export default Layout;
