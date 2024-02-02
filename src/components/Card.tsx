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
    <div className="min-w-[20rem] flex flex-col gap-5 p-5 rounded-md shadow-md flex-1 glass">
      <div className="w-full flex items-center gap-3 rounded-full">
        <h3 className="text-white font-bold">{title}</h3>
        {IconComponent && <IconComponent size={25} />}
      </div>
      <ScrollShadow>
        <div className="pr-2 h-[10rem] max-h-[10rem] card">
          <p className="text-base font-light text-neutral-300">{text}</p>
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
