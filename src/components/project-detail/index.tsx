import { useParams } from "react-router-dom";
import { ProjectDetailInfo as data } from "@/utils/common";

const ProjectDetailComponent = () => {
  const { id } = useParams();

  let idx = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase() == id?.toLowerCase()) idx = i;
  }

  return (
    <div className="scroll-style overflow-y-scroll p-3 h-full">
      {/* main image */}
      <div className="h-2/5 md:h-3/5 sm:max-md:h-4/5 lg:h-full w-full flex items-center justify-center dark:bg-secondary-bg bg-[#33333312] rounded-md">
        <div className="size-4/5 rounded-md">
          <img
            className="rounded-md size-full"
            src={data[idx].mainImage}
            alt="project image"
          ></img>
        </div>
      </div>

      {/* key point descriptions */}
      <div className="dark:bg-secondary-bg bg-sec h-fit lg:h-3/5 mt-4 rounded-md p-4 flex flex-col justify-between">
        {/* heading */}
        <div className="text-xl uppercase w-full md:w-4/5 font-mono mb-20 lg:mb-0">
          <span>{data[idx].name} </span>
          <span className="text-muted-foreground">{data[idx].description}</span>
        </div>

        {/* summary-techstack-links */}
        <div className="grid md:grid-cols-3 gap-8 font-mono">
          <div>
            <div className="mb-3 uppercase text-lg md:text-sm">Summary</div>
            <div className="dark:text-[#FFFFFFB3] text-[#303030B3] text-sm md:text-xs">
              {data[idx].summary}
            </div>
          </div>
          <div>
            <div className="mb-3 uppercase text-lg md:text-sm">Tech Stack</div>
            <div className="dark:text-[#FFFFFFB3] text-[#303030B3] text-sm md:text-xs">
              {data[idx].techStack}
            </div>
          </div>
          <div>
            <div className="mb-3 uppercase text-lg md:text-sm">Links</div>
            <div className="dark:text-[#FFFFFFB3] text-[#303030B3] text-sm md:text-xs flex flex-col">
              <a href={data[idx].gitLink}>Github</a>
              <a href={data[idx].webLink}>Live</a>
            </div>
          </div>
        </div>
      </div>

      {/* project-info */}
      {data[idx].projectInfo.map((info, index) => (
        <div key={index} className="h-fit my-8">
          {/* image */}
          <div className="h-2/5 md:h-full w-full flex items-center mt-4 justify-center dark:bg-secondary-bg bg-[#33333312] rounded-md">
            <div className="size-full md:size-4/5 bg-contain rounded-md py-1">
              <img
                className="rounded-md size-full"
                src={info.url}
                alt="project image"
              ></img>
            </div>
          </div>

          {/* text */}
          <div className="h-fit p-3 md:py-24 w-full md:flex md:justify-center lg:justify-end md:pr-24 my-4">
            <div className="lg:w-2/5 md:w-4/5 flex flex-col gap-3">
              <div className="text-lg uppercase">{info.head}</div>
              {info.body.map((bdy, index) => (
                <div
                  key={index}
                  className="font-mono text-sm md:text-xs text-start dark:text-[#FFFFFFB3] text-[#303030B3]"
                >
                  {bdy}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailComponent;
