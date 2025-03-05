"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docSections } from "@/lib/docs-data"

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {docSections.map((section) => (
        <div key={section.id} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{section.title}</h4>
          {section.items.length > 0 && (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                    pathname === item.href ? "font-medium text-foreground bg-accent" : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

