import { IconType } from "react-icons";
import { ScrollShadow } from "@nextui-org/react";

interface CardProps {
  title: string;
  icon: IconType;
  text: string;
  chips?: React.ReactNode[];
  hrefs?: string[];
}

export default function Card({
  title,
  icon: IconComponent,
  text,
  chips,
  hrefs,
}: CardProps) {
  return (
    <div className="h-[18rem] max-h-[18rem] min-w-[20rem] overflow-y-auto flex flex-col gap-5 p-5 rounded-md bg-neutral-800 shadow-md flex-1 card">
      <div className="w-full flex items-center gap-3 rounded-full">
        <h3>{title}</h3>
        {IconComponent && <IconComponent size={25} />}
      </div>
      <ScrollShadow>
        <div className="pr-2">
          <p className="text-base font-light">{text}</p>
        </div>
      </ScrollShadow>
      {chips && chips.length > 0 && (
        <div className="flex gap-5">
          {chips.map((chip, index) => (
            <a
              key={index}
              href={hrefs && hrefs[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chip}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
