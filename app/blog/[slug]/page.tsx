import Image from "next/image"
import { fetchSinglePost } from "@/utils/wordpress"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchSinglePost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | MOMS Mobile Oil Change Blog`,
    description: post.excerpt || "Read our latest blog post on mobile oil change services.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read our latest blog post on mobile oil change services.",
      images: [
        {
          url: post.featuredImage?.node.sourceUrl || "https://momsoilchange.com/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchSinglePost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">Published on {new Date(post.date).toLocaleDateString()}</p>
        {post.featuredImage && (
          <Image
            src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
            alt={post.featuredImage.node.altText || post.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover mb-6 rounded"
          />
        )}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

