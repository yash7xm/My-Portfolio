const textStyle = "cursor-pointer";
const sepratorStyle = "text-muted-foreground mx-2";

const Footer = () => {
  return (
    <div className="p-3 font-mono font-700 uppercase text-xs border-t">
      <span className={textStyle}>Email</span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>Linkedin</span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>Resume</span>
      <span className={sepratorStyle}>/</span>
      <span className={textStyle}>Twitter</span>
    </div>
  );
};

export default Footer;
