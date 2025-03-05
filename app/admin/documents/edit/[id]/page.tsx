"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { docContents, type DocImage } from "@/lib/docs-data"
import { ImageUpload } from "@/components/image-upload"

interface EditDocumentPageProps {
  params: {
    id: string
  }
}

export default function EditDocumentPage({ params }: EditDocumentPageProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    id: "",
    content: "",
    images: [] as DocImage[],
  })

  useEffect(() => {
    const doc = docContents.find((doc) => doc.id === params.id)
    if (doc) {
      setFormData({
        title: doc.title,
        id: doc.id,
        content: doc.content,
        images: doc.images,
      })
    } else {
      router.push("/admin/documents")
    }
  }, [params.id, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageUpload = (image: DocImage) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, image],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Document updated:", formData)
    alert("Document updated successfully!")
    router.push("/admin/documents")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Document</h1>
        <p className="text-muted-foreground">Update an existing document.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
            <CardDescription>Edit the details for your document.</CardDescription>
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
                disabled
              />
              <p className="text-sm text-muted-foreground">ID cannot be changed after creation.</p>
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
            <Button type="submit">Update Document</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

