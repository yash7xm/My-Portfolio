import SideBar from "@/components/sidebar";
import Projects from "../Projects";

const Home = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <Projects />
    </div>
  );
};

export default Home;
