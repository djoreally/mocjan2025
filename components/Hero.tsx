import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-white">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_367348864_306493548455608_1284110913582803278_n.webp-rD02AGkGrLcnhV9xnF3jSA1OYi2ROj.jpeg"
        alt="MOMS Mobile Oil Change Hero"
        width={1200}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="container mx-auto px-4 py-24 z-20">
        <div className="max-w-4xl text-center mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-center mb-4">
            PHILADELPHIA'S FIRST CHOICE FOR <span className="text-blue-500">MOBILE OIL CHANGES</span>
            <span className="block mt-2"></span>
          </h1>
          <p className="text-2xl text-white text-center mb-8">
          No need to call. Our self booking allows you to find the day and time that best fits your schedule. We change your oil not your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://momsoilchange.bookyouroilchange.com/"
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Schedule Now
            </Link>
            <Link
              href="/services"
              className="bg-gray-200 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-300 transition-colors inline-flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

