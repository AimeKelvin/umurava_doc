"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ImageUpload } from "@/components/image-upload"
import type { DocImage } from "@/lib/docs-data"

export default function CreateDocumentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    id: "",
    content: "",
    images: [] as DocImage[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === "title" && !formData.id) {
      setFormData((prev) => ({
        ...prev,
        id: value.toLowerCase().replace(/\s+/g, "-"),
      }))
    }
  }

  const handleImageUpload = (image: DocImage) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, image],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Document created:", formData)
    alert("Document created successfully!")
    router.push("/admin/documents")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Document</h1>
        <p className="text-muted-foreground">Add a new document to your documentation.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
            <CardDescription>Enter the details for your new document.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter document title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="id">ID</Label>
              <Input
                id="id"
                name="id"
                placeholder="Enter document ID (used in URL)"
                value={formData.id}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-muted-foreground">This will be used in the URL: /docs/[id]</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content (Markdown)</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="# Your Markdown Content Here"
                value={formData.content}
                onChange={handleChange}
                required
                className="min-h-[300px] font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label>Images</Label>
              <ImageUpload onImageUpload={handleImageUpload} />
              <div className="grid grid-cols-2 gap-4 mt-4">
                {formData.images.map((image) => (
                  <div key={image.id} className="relative">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-auto rounded" />
                    <p className="mt-1 text-sm text-muted-foreground">{image.alt}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Create Document</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

