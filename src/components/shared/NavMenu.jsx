"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const links = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Services",
    href: "/services"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "API",
    href: "/api"
  },
  {
    title: "Contact",
    href: "/contact"
  },
]


export const NavMenu = () => {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    {links.map((link) => (
      <NavigationMenuItem key={link.href}>
        <NavigationMenuLink href={link.href}>
          {link.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>
  )
}
