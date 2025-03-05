import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BookOpen } from "lucide-react"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <BookOpen className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">EdTech Docs</span>
      </Link>
      <nav className={cn("flex items-center space-x-6 text-sm font-medium", className)} {...props}>
        <Link href="/docs/introduction" className="transition-colors hover:text-foreground/80 text-foreground">
          Documentation
        </Link>
        <Link href="/guides" className="transition-colors hover:text-foreground/80 text-muted-foreground">
          Guides
        </Link>
        <Link href="/api" className="transition-colors hover:text-foreground/80 text-muted-foreground">
          API
        </Link>
      </nav>
    </div>
  )
}

