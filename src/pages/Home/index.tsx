import Header from "@/components/common/header";
import Projects from "../Projects";
import NavBar from "@/components/navbar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Header headerType={"home"} />
      <Projects />
    </div>
  );
};

export default Home;
