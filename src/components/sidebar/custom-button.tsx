import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Custom_Button = () => {
  return (
    <div className="w-full border border-slate-800 rounded p-3 cursor-pointer flex gap-4">
      {/* Image */}
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Text */}
      <div>
        {/* Name */}
        <div className="font-700 text-sm">Projects</div>

        {/* Info */}
        <p className="text-sm text-muted-foreground">My recent projects</p>
      </div>
    </div>
  );
};

export default Custom_Button;
