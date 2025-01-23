import Image from "next/image"
import Link from "next/link"
import { Star, SprayCanIcon as Spray, Disc, FootprintsIcon as Tire, Wrench } from "lucide-react"

const services = [
  {
    id: "synthetic-oil-change",
    title: "Full Synthetic Oil Change",
    description:
      "Premium maintenance service performed right at your location. Our certified technicians use top-quality products for superior protection and performance.",
    price: "$69.99",
    originalPrice: "$89.99",
    rating: 4.9,
    reviews: 200,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_367348864_306493548455608_1284110913582803278_n.webp-rD02AGkGrLcnhV9xnF3jSA1OYi2ROj.jpeg",
    features: [
      "Premium synthetic oil (up to 5 quarts)",
      "New oil filter installation",
      "Comprehensive 23-point inspection",
      "Convenient mobile service",
      "Certified technicians",
    ],
    partneredServices: [
      { name: "Detailing", icon: Spray },
      { name: "Brakes", icon: Disc },
      { name: "Tires", icon: Tire },
      { name: "Light Repairs", icon: Wrench },
    ],
  },
  {
    id: "fleet-maintenance",
    title: "Fleet Maintenance",
    description:
      "Comprehensive maintenance solutions designed for businesses of all sizes. We specialize in maintaining various types of equipment to ensure longevity and optimal performance.",
    price: "Custom Pricing",
    rating: 4.9,
    reviews: 50,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_278362374_926603717996609_6261952984645302827_n.webp-RQWYPak22nLJNxPvNFsYSfXcnDcdcy.jpeg",
    features: [
      "Specialized fleet vehicle expertise",
      "Customized maintenance schedules",
      "Volume pricing available",
      "On-site service for entire fleets",
      "Detailed service reporting",
    ],
    partneredServices: [
      { name: "Detailing", icon: Spray },
      { name: "Brakes", icon: Disc },
      { name: "Tires", icon: Tire },
      { name: "Light Repairs", icon: Wrench },
    ],
  },
]

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-xl text-center text-black mb-8">Professional mobile oil change and maintenance solutions</p>
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="relative h-64 md:h-full w-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={service.id === "synthetic-oil-change"}
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(service.rating) ? "text-yellow-400" : "text-black"
                          } fill-current`}
                        />
                      ))}
                      <span className="ml-2 text-black">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                    <div className="mb-4 text-sm text-black">
                      {service.features.map((feature, index) => (
                        <span key={index}>
                          {feature}
                          {index < service.features.length - 1 && <span className="mx-1 text-blue-500">•</span>}
                        </span>
                      ))}
                    </div>
                    <p className="text-black mb-4">{service.description}</p>
                    {service.partneredServices && (
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">Our Partnered Services</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {service.partneredServices.map((partneredService, index) => (
                            <div
                              key={index}
                              className="flex items-center bg-gray-100 rounded-lg p-3 transition-colors hover:bg-gray-200"
                            >
                              <partneredService.icon className="w-6 h-6 mr-2 text-blue-600" />
                              <span className="text-sm font-medium">{partneredService.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/4 md:border-l border-gray-200 pl-6">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-gray-900 mr-2">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-black line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-blue-800 font-semibold mb-4">Free on-site service</p>
                    <div className="space-y-2">
                      <Link
                        href={service.id === "fleet-maintenance" ? "/fleet-maintenance" : "/schedule"}
                        className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition duration-300"
                      >
                        {service.id === "fleet-maintenance" ? "Get Quote" : "Schedule Now"}
                      </Link>
                      <button className="block w-full px-4 py-2 bg-white text-blue-600 text-center rounded-md border border-blue-600 hover:bg-blue-50 transition duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

