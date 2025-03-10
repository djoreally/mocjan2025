import Image from "next/image"
import { MapPin } from "lucide-react"

const ServiceArea = () => {
  // Areas within approximately 20 miles of Ambler, PA
  const serviceAreas = [
    { name: "Ambler", distance: "0 mi" },
    { name: "Fort Washington", distance: "5 mi" },
    { name: "Blue Bell", distance: "6 mi" },
    { name: "Plymouth Meeting", distance: "8 mi" },
    { name: "Horsham", distance: "9 mi" },
    { name: "Willow Grove", distance: "10 mi" },
    { name: "Norristown", distance: "10 mi" },
    { name: "Montgomeryville", distance: "11 mi" },
    { name: "King of Prussia", distance: "12 mi" },
    { name: "Glenside", distance: "12 mi" },
    { name: "Warminster", distance: "15 mi" },
    { name: "Doylestown", distance: "18 mi" },
    { name: "Philadelphia", distance: "20 mi" }
  ]

  return (
    <section className="bg-white py-16" id="service-areas">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Mobile Oil Changes Within 20 Miles of Ambler, PA</h2>
        <p className="text-xl text-center text-gray-600 mb-8">Bringing convenient, professional oil change services right to your location</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Service Radius</h3>
            <p className="mb-6">We proudly serve Ambler and surrounding communities with our mobile oil change services. No need to visit a shop - our certified technicians come to your home or workplace!</p>
            
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div key={area.name} className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span className="font-medium">{area.name}</span>
                  <span className="text-sm text-gray-500">({area.distance})</span>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-gray-700">Don't see your location? Contact us to check if we can service your area!</p>
          </div>
          
          <div className="relative">
            <Image
              src="/images/ambler-service-area-map.jpg"
              alt="Mobile Oil Change Service Area Map showing 20-mile radius around Ambler, PA"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Our Mobile Oil Change Service in Montgomery County?</h3>
          <p className="max-w-3xl mx-auto mb-8">Our mobile oil change service saves you time and hassle by coming directly to your location in Ambler and surrounding areas. No waiting rooms, no driving across town - just convenient, professional service right where you need it.</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
