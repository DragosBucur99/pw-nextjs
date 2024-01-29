"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sectionIdToScroll, setSectionIdToScroll] = useState("");

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setSectionIdToScroll(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionIdToScroll);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (!isMenuOpen && sectionIdToScroll) {
      handleScroll();
      setSectionIdToScroll("");
    }
  }, [isMenuOpen, sectionIdToScroll]);

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
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral-800 rounded-md shadow-md px-5 lg:px-40"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarBrand>
          <span className="flex items-center gap-3 cursor-pointer">
            <div className="rounded-full w-3 h-3 bg-green-400"></div>
            Available for work
          </span>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            onClick={() => scrollToSection(item.href)}
            className="cursor-pointer text-white"
          >
            <NavbarItem>{item.name}</NavbarItem>
          </Link>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white cursor-pointer"
              size="lg"
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
