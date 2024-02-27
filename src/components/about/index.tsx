const AboutComp = () => {
  return (
    <div className="p-3 flex h-[86.5%] gap-4 w-full flex-col md:flex-row">
      {/* My Image */}
      <div
        className="md:w-2/5 w-full bg-sec dark:bg-secondary-bg rounded-md p-3 h-full overflow-y-scroll border overflow-x-hidden scroll-style *:
      "
      >
        <div className="h-[75%]">
          <img
            className="rounded-md h-full"
            src="https://res.cloudinary.com/dgl5jcwgb/image/upload/v1700918211/IMG_20230703_213438_303_vvyxvf.jpg"
            alt="yash poonia"
          />
        </div>
        <div className="h-[25%] font-mono my-2">
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
      <div className="md:w-[60%] w-full h-fit rounded-md overflow-y-scroll overflow-x-hidden scroll-style px-1">
        {/* Education */}
        <div className="bg-sec dark:bg-secondary-bg border p-3 rounded-md font-mono mb-3">
          <div className="text-sm mb-3 uppercase">Education</div>
          <div className="text-[0.7rem]">2021 - 2025</div>
          <div className="text-[0.7rem]">
            ↳ Computer science and engineering
          </div>
          {/* <div className="bdy">2019 - 2020</div>
          <div className="bdy">↳ Class 12 (CBSE)</div>
          <div className="bdy mrb">↳ 90.8%</div>
          <div className="bdy">2017 - 2018</div>
          <div className="bdy">↳ Class 10 (CBSE)</div>
          <div className="bdy mrb">↳ 93.4%</div> */}
        </div>

        {/* Skills */}
        <div className="bg-sec dark:bg-secondary-bg border p-3 rounded-md font-mono mb-3">
          <div className="text-sm mb-3 uppercase">Skills</div>
          <div className="flex flex-col gap-4 justify-between text-[0.7rem] md:flex-row">
            <div>
              <div className="mb-1">Programming Languages</div>
              <div>↳ JavaScript</div>
              <div>↳ Java</div>
              <div>↳ Python</div>
              <div>↳ TypeScript</div>
              <div>↳ C++</div>
              <div>↳ C</div>
            </div>
            <div>
              <div className="mb-1">Web Technologies</div>
              <div>↳ Node.js</div>
              <div>↳ Express.js</div>
              <div>↳ React</div>
              <div>↳ Redux</div>
              <div>↳ MongoDB</div>
              <div>↳ SQL</div>
              <div>↳ Docker</div>
              <div>↳ AWS</div>
            </div>
            <div>
              <div className="mb-1">Tools</div>
              <div>↳ Git</div>
              <div>↳ Github</div>
              <div>↳ Figma</div>
            </div>
            <div>
              <div className="mb-1">Core</div>
              <div>↳ Operating System</div>
              <div>↳ Database Management System</div>
              <div>↳ Linux</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-sec dark:bg-secondary-bg border p-3 rounded-md font-mono mb-3">
          <div className="text-sm mb-3 uppercase">Contact</div>
          <a href="https://github.com/yash7xm" className="text-xs">
            ↳ github.com/yash7xm
          </a>
          <div></div>
          <a href="https://twitter.com/Yash_Poonia_" className="text-xs">
            ↳ twitter.com/Yash_Poonia_
          </a>
          <div></div>
          <a href="https://www.linkedin.com/in/YashPoonia" className="text-xs">
            ↳ linkedin.com/in/YashPoonia
          </a>
          <div></div>
          <a href="https://leetcode.com/Yash_7xm/" className="text-xs">
            ↳ leetcode.com/Yash_7xm/
          </a>
        </div>

        {/* Achievements */}
        <div className="bg-sec dark:bg-secondary-bg border p-3 rounded-md font-mono mb-3">
          <div className="text-xs mb-3 uppercase">ACHIEVEMENTS</div>
          <div className="text-[0.7rem]">
            ↳ Created a custom programming language.
          </div>
          <div className="text-[0.7rem]">
            ↳ Developed an interpreter for the custom programming language.
          </div>
          <div className="text-[0.7rem]">
            ↳ Solved over 1000+ coding challenges on various platforms,
            showcasing expertise in problem-solving.
          </div>
          <div className="text-[0.7rem]">
            ↳ Secured victory in multiple coding competitions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
