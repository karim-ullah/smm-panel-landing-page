"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
        <NavigationMenuLink asChild>
          <Link href={link.href}>{link.title}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>
  )
}
