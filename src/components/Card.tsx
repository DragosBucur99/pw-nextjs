import { IconType } from "react-icons";

interface CardProps {
  title: string;
  icon: IconType;
  text: string;
}

export default function Card({ title, icon: IconComponent, text }: CardProps) {
  return (
    <div className="h-[15rem] overflow-y-auto flex flex-col gap-5 p-5 rounded-md bg-neutral-800 shadow-md">
      <div className="w-full flex items-center gap-3 rounded-full">
        <h3>{title}</h3>
        {IconComponent && <IconComponent size={25} />}
      </div>
      <p className="text-base font-light">{text}</p>
    </div>
  );
}
