"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export const navigationLinks = [
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
    {navigationLinks.map((link) => (
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
