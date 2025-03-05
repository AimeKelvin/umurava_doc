"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FileText, PlusCircle, Settings, Users } from "lucide-react"

const adminLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Documents",
    href: "/admin/documents",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Create Document",
    href: "/admin/documents/create",
    icon: <PlusCircle className="mr-2 h-4 w-4" />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Admin Panel</h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                pathname === link.href ? "font-medium text-foreground bg-accent" : "text-muted-foreground",
              )}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

