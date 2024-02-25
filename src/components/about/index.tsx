const AboutComp = () => {
  return (
    <div className="flex-1 p-3 flex h-full">
      {/* My Image */}
      <div className="w-2/5 bg-sec dark:bg-secondary-bg rounded-md p-3 h-full overflow-y-scroll border overflow-x-hidden scroll-style">
        <div className="h-[70%]">
          <img
            className="rounded-md h-full"
            src="https://res.cloudinary.com/dgl5jcwgb/image/upload/v1700918211/IMG_20230703_213438_303_vvyxvf.jpg"
            alt="yash poonia"
          />
        </div>
        <div className="h-[30%] font-mono my-2">
          <div className="text-sm font-medium uppercase mb-3">
            Hi, I'm Yash 👋🏼
          </div>
          <div className="mb-3 text-[0.7rem]">
            A Computer Engineering student passionate about programming language
            development, web tech, and software engineering. I'm focused on
            creating innovative projects and tackling coding challenges. Beyond
            academia, I've crafted a custom language, built an Integrated
            Learning Platform (ILP), and led the development of an interactive
            typing web app.
          </div>
          <div className="text-[0.7rem]">
            Outside the digital world, I enjoy exploring code conversion
            intricacies, participating in coding competitions, and constantly
            seeking growth opportunities. My commitment to excellence in
            academics and projects mirrors my passion for pushing the boundaries
            of what's possible in the tech realm. Let's connect and explore the
            limitless possibilities of coding together!
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div></div>
    </div>
  );
};

export default AboutComp;
