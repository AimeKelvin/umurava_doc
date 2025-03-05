import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              EdTech Platform Documentation
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Comprehensive guides and documentation to help you get the most out of the EdTech platform.
            </p>
            <div className="space-x-4">
              <Link href="/docs/introduction" passHref>
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/docs/api" passHref>
                <Button variant="outline" size="lg">
                  API Reference
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Getting Started</h3>
                <p className="text-muted-foreground">Learn how to install and set up the EdTech platform.</p>
              </div>
              <Link href="/docs/introduction" className="absolute inset-0" aria-label="Getting Started">
                <span className="sr-only">Getting Started</span>
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Features</h3>
                <p className="text-muted-foreground">Explore the features and capabilities of the platform.</p>
              </div>
              <Link href="/docs/student-management" className="absolute inset-0" aria-label="Features">
                <span className="sr-only">Features</span>
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">API Reference</h3>
                <p className="text-muted-foreground">Detailed API documentation for developers.</p>
              </div>
              <Link href="/docs/authentication" className="absolute inset-0" aria-label="API Reference">
                <span className="sr-only">API Reference</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

