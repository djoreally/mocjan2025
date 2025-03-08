import Link from "next/link"
import Image from "next/image"

export default function AuthorProfile() {
  return (
    <div className="border-t border-gray-200 mt-12 pt-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/images/tyreese-burton.jpg"
          alt="Tyreese Burton"
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Tyreese Burton</h2>
          <p className="text-gray-600 mb-4">
            Entrepreneur | SaaS & Fleet Management Innovator | Mobile Oil Change Expert
          </p>
          
          <div className="prose max-w-none mb-6">
            <p>
              Tyreese Burton is a forward-thinking entrepreneur specializing in fleet maintenance, 
              mobile oil change services, and SaaS development. With years of experience in the 
              automotive service industry, Tyreese has built platforms that help mobile oil change 
              providers streamline operations, acquire customers, and scale their businesses.
            </p>
            
            <p>
              As the founder of MOMS Mobile Oil Change and the driving force behind Book Your Oil 
              Change and a fleet management SaaS, he is passionate about automating service workflows, 
              enhancing customer experience, and leveraging technology for growth.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">🔍 Topics Covered:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fleet maintenance & mobile oil change industry insights</li>
              <li>SaaS strategies for service-based businesses</li>
              <li>Search engine dominance beyond Google</li>
              <li>AI-driven business automation</li>
              <li>Digital marketing & customer acquisition</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Connect with Tyreese:</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/in/tyreese-burton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/tyreese_burton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Twitter (X)
              </Link>
              <Link
                href="https://www.momsmobileoilchange.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Website
              </Link>
              <Link
                href="https://www.bookyouroilchange.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Book Your Oil Change
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}