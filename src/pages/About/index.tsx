import AboutComp from "@/components/about";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header headerType={"About"} />
      <AboutComp />
      <Footer />
    </div>
  );
};

export default About;
