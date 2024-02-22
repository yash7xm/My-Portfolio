import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface ButtonProps {
  body?: {
    title: string;
    desc: string;
  };
}

const CustomButton: React.FC<ButtonProps> = ({ body }) => {
  return (
    <div className="w-full border border-slate-200 rounded p-3 cursor-pointer flex gap-4">
      {/* Image */}
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Text */}
      <div>
        {/* Name */}
        <div className="font-700 text-sm">{body?.title}</div>

        {/* Info */}
        <p className="text-sm text-muted-foreground">{body?.desc}</p>
      </div>
    </div>
  );
};

export default CustomButton;
