import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="mb-8">Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        Return to Blog
      </Link>
    </div>
  )
}

