import { useParams } from "react-router-dom";
import { ProjectDetailInfo as data } from "@/utils/common";

const ProjectDetailComponent = () => {
  const { id } = useParams();

  let idx = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase() == id?.toLowerCase()) idx = i;
  }

  return (
    <div className="scroll-style overflow-y-scroll p-3">
      {/* main image */}
      <div className="h-screen w-full flex items-center justify-center dark:bg-secondary-bg bg-[#33333312] rounded-md">
        <div
          className="h-4/5 w-4/5 bg-contain rounded-md"
          style={{ backgroundImage: `url(${data[idx].mainImage})` }}
        ></div>
      </div>

      {/* key point descriptions */}
      <div className="dark:bg-secondary-bg bg-sec h-3/5 mt-4 rounded-md p-4 flex flex-col justify-between">
        {/* heading */}
        <div className="text-xl uppercase w-4/5 font-mono">
          <span>{data[idx].name} </span>
          <span className="text-muted-foreground">{data[idx].description}</span>
        </div>

        {/* summary-techstack-links */}
        <div className="grid grid-cols-3 gap-8 font-mono">
          <div>
            <div className="mb-3 uppercase text-sm">Summary</div>
            <div className="dark:text-[#FFFFFFB3] text-[#303030B3] text-xs">
              {data[idx].summary}
            </div>
          </div>
          <div>
            <div className="mb-3 uppercase text-sm">Tech Stack</div>
            <div className="dark:text-[#FFFFFFB3] text-[#303030B3] text-xs">
              {data[idx].techStack}
            </div>
          </div>
          <div>
            <div className="mb-3 uppercase text-sm">Links</div>
            <div className="dark:text-[#FFFFFFB3] text-[#303030B3] text-xs flex flex-col">
              <a href={data[idx].gitLink}>Github</a>
              <a href={data[idx].webLink}>Live</a>
            </div>
          </div>
        </div>
      </div>

      {/* project-info */}
      {data[idx].projectInfo.map((info, index) => (
        <div key={index}>
          <div className="h-screen w-full flex items-center mt-4 justify-center dark:bg-secondary-bg bg-[#33333312] rounded-md">
            <div
              className="h-4/5 w-4/5 bg-contain rounded-md"
              style={{ backgroundImage: `url(${info.url})` }}
            ></div>
          </div>
          <div className="h-fit py-24 w-full flex justify-end pr-24">
            <div className="w-2/5 flex flex-col gap-3">
              <div className="text-lg uppercase">{info.head}</div>
              {info.body.map((bdy, index) => (
                <div
                  key={index}
                  className="font-mono text-xs text-start dark:text-[#FFFFFFB3] text-[#303030B3]"
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
