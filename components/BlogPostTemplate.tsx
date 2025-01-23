import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"

interface BlogPostProps {
  title: string
  content: string
  date: string
  author: string
  slug: string
}

export const generateMetadata = ({ title, content }: BlogPostProps): Metadata => {
  return {
    title: `${title} | MOMS Mobile Oil Change Blog`,
    description: content.substring(0, 160),
  }
}

const BlogPostTemplate: React.FC<BlogPostProps> = ({ title, content, date, author, slug }) => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="text-gray-600 mb-4">
        Published on {date} by {author}
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="mt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}

export default BlogPostTemplate

