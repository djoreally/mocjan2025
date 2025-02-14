import Link from "next/link"
import Image from "next/image"
import { fetchBlogPosts } from "@/utils/wordpress"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MOMS Mobile Oil Change Blog | Expert Tips and Insights",
  description:
    "Read our latest articles on mobile oil change services, vehicle maintenance tips, and industry insights. Stay informed about keeping your car in top condition.",
}

export const revalidate = 3600 // Revalidate every hour

export default async function Blog() {
  const blogPosts = await fetchBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">MOMS Mobile Oil Change Blog</h1>
      <p className="text-xl mb-8">Stay informed about mobile oil changes, vehicle maintenance, and more!</p>
      {blogPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post: any) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              {post.featuredImage && (
                <Image
                  src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
                  alt={post.featuredImage.node.altText || post.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                Read more about {post.title.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No blog posts found. Check back later for updates on mobile oil changes and vehicle maintenance!
        </p>
      )}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Mobile Oil Change?</h2>
        <p className="mb-4">Don't wait! Schedule your convenient oil change service today.</p>
        <Link
          href="https://momsoilchange.bookyouroilchange.com/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Book Your Mobile Oil Change
        </Link>
      </div>
    </div>
  )
}

