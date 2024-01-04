"use client";
import { useState } from "react";
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
  const menuItems = [
    {
      name: "Home",
      href: "#hero-section",
    },
    {
      name: "Playground",
      href: "#playground-section",
    },
    {
      name: "Skills",
      href: "#skills-section",
    },
    {
      name: "Contact",
      href: "#contact-section",
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral-800 rounded-md shadow-md lg:px-40"
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
          <a href={item.href} key={index}>
            <NavbarItem>{item.name}</NavbarItem>
          </a>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
