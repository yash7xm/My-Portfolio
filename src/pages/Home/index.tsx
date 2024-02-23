import Header from "@/components/common/header";
import Projects from "../Projects";

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Projects />
    </div>
  );
};

export default Home;
