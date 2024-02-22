import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
