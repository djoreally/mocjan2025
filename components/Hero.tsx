import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-white">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_367348864_306493548455608_1284110913582803278_n.webp-rD02AGkGrLcnhV9xnF3jSA1OYi2ROj.jpeg"
        alt="MOMS Mobile Oil Change Hero"
        width={1200}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      
      {/* Overlay Tint */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 z-20 relative text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              MOMS Mobile Oil Change Near Me
            </span>
            <span className="block mt-2">
              Oil Change Service That Comes To You
            </span>
          </h1>
          
          <p className="text-2xl text-white mb-8">
            We change your oil, not your schedule. Our self-booking allows you to find the day and time that best fits your schedule. 
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="https://momsoilchange.bookyouroilchange.com/"
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Schedule Your Oil Change Now
            </Link>
            <Link
              href="/services"
              className="bg-gray-200 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-300 transition-colors inline-flex items-center justify-center"
            >
              View Oil Change Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
