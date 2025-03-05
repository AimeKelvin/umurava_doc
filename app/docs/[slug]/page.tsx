import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { docContents } from "@/lib/docs-data"
import { Markdown } from "@/components/markdown"

interface DocPageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = docContents.find((doc) => doc.id === slug)

  if (!doc) {
    null
  }

  return doc
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params.slug)

  if (!doc) {
    return {}
  }

  return {
    title: `${doc.title} - EdTech Documentation`,
    description: `Learn about ${doc.title} in the EdTech platform documentation.`,
  }
}

export async function generateStaticParams() {
  return docContents.map((doc) => ({
    slug: doc.id,
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params.slug)

  if (!doc) {
    notFound()
  }

  return (
    <article className="docs-content container max-w-3xl py-6 lg:py-10">
      <div className="space-y-4">
        <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">{doc.title}</h1>
      </div>
      <Markdown content={doc.content} />
    </article>
  )
}

