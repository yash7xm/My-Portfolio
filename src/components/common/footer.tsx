const textStyle = "cursor-pointer";
const sepratorStyle = "text-muted-foreground mx-2";

const Footer = () => {
  return (
    <div className="p-3 font-mono font-700 uppercase text-xs md:border-t text-center md:text-start w-full">
      <span className={textStyle}>
        <a href="mailto:yash.7xm@gmail.com">Email</a>
      </span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>
        <a href="https://www.linkedin.com/in/yash-poonia-00326022b/">
          Linkedin
        </a>
      </span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>
        <a href="../../public/yashpoonia.pdf" download="yashpoonia.pdf">
          Resume
        </a>
      </span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>
        <a href="https://x.com/Yash_Poonia_">Twitter</a>
      </span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>
        <a href="https://github.com/yash7xm">GitHub</a>
      </span>
    </div>
  );
};

export default Footer;
