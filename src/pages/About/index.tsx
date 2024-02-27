import AboutComp from "@/components/about";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import NavBar from "@/components/navbar";

const About = () => {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <Header headerType={"About"} />
      <AboutComp />
      <Footer />
    </div>
  );
};

export default About;
