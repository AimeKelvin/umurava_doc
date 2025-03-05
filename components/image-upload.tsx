"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { DocImage } from "@/lib/docs-data"

interface ImageUploadProps {
  onImageUpload: (image: DocImage) => void
}

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [imageAlt, setImageAlt] = useState("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const src = e.target?.result as string
        onImageUpload({
          id: Date.now().toString(),
          alt: imageAlt,
          src,
        })
        setImageAlt("")
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="imageAlt">Image Alt Text</Label>
        <Input
          id="imageAlt"
          value={imageAlt}
          onChange={(e) => setImageAlt(e.target.value)}
          placeholder="Enter alt text for the image"
        />
      </div>
      <div>
        <Input id="imageUpload" type="file" accept="image/*" onChange={handleFileChange} />
      </div>
    </div>
  )
}

