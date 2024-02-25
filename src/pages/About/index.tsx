import AboutComp from "@/components/about";
import Header from "@/components/common/header";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header headerType={"About"} />
      <AboutComp />
    </div>
  );
};

export default About;
