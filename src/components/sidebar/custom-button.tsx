import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export interface ButtonProps {
  body?: {
    title: string;
    desc: string;
    linkTo: string;
    img: string;
  };
}

const CustomButton: React.FC<ButtonProps> = ({ body }) => {
  return (
    <Link
      to={body?.linkTo || "/"}
      className="w-full border rounded p-3 cursor-pointer flex gap-4"
    >
      {/* Image */}
      <Avatar className="rounded-md">
        <AvatarImage src={body?.img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Text */}
      <div>
        {/* Name */}
        <div className="font-700 text-sm">{body?.title}</div>

        {/* Info */}
        <p className="text-xs text-muted-foreground">{body?.desc}</p>
      </div>
    </Link>
  );
};

export default CustomButton;
