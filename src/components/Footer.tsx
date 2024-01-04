"use client";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "@nextui-org/react";

export default function Footer() {
  const [sectionIdToScroll, setSectionIdToScroll] = useState("");

  const scrollToSection = (sectionId: string) => {
    setSectionIdToScroll(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionIdToScroll);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (sectionIdToScroll) {
      handleScroll();
      setSectionIdToScroll("");
    }
  }, [sectionIdToScroll]);

  const menuItems = [
    {
      name: "Home",
      href: "hero-section",
    },
    {
      name: "Playground",
      href: "playground-section",
    },
    {
      name: "Skills",
      href: "skills-section",
    },
    {
      name: "Contact",
      href: "contact-section",
    },
  ];

  return (
    <footer className="relative flex flex-wrap justify-between pt-10">
      <div className="w-full flex justify-between">
        <ul className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Connect:</h2>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.linkedin.com/in/dragos-bucur-b73966264/"
            anchorIcon={<FaLinkedin />}
          >
            LinkedIn
          </Link>
        </ul>
        <ul className="text-end flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <Link
                className="text-white"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <span className="text-xs mt-5 w-full text-center">
        Copyright {new Date().getFullYear()} © Dragos Portfolio
      </span>
    </footer>
  );
}
