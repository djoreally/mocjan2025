import Image from "next/image"
import { MapPin } from "lucide-react"

const ServiceArea = () => {
  const areas = ["Philadelphia", "Montgomery County", "Delaware County", "Chester County", "Bucks County", "More"]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Service Areas</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Bringing convenient oil changes to your neighborhood</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-cruzenapp-services-roadside-gas-delivery-2024-11-14-16_27_21-d53wIvdYF0snYrDaKREgkDAIPi7ZDs.png"
              alt="MOMS Mobile Oil Change Service Areas Map"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea

