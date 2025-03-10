import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Car, Calendar, Clock, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react'

// This would typically come from a database or CMS
const serviceAreas = [
  { 
    slug: "ambler", 
    name: "Ambler", 
    distance: "0 mi",
    content: "Our headquarters is located in Ambler, PA, where we provide the fastest response times for mobile oil changes. As Ambler residents ourselves, we take pride in offering premium service to our neighbors.",
    zip: "19002",
    landmarks: ["Ambler Theater", "Wissahickon Valley Park", "Temple University Ambler"],
    neighborhoods: ["Upper Dublin", "Whitpain Township", "Downtown Ambler"],
    popularServices: ["Full Synthetic Oil Change", "Standard Oil Change", "Filter Replacement"]
  },
  { 
    slug: "fort-washington", 
    name: "Fort Washington", 
    distance: "5 mi",
    content: "Fort Washington residents enjoy quick service times for our mobile oil change services. We regularly service residential neighborhoods and business parks in the area.",
    zip: "19034",
    landmarks: ["Fort Washington State Park", "Fort Washington Office Park", "Willow Grove Mall"],
    neighborhoods: ["Militia Hill", "Dresher", "Spring Mill"],
    popularServices: ["Synthetic Blend Oil Change", "Full Synthetic Oil Change", "Filter Replacement"] 
  },
  { 
    slug: "blue-bell", 
    name: "Blue Bell", 
    distance: "6 mi",
    content: "Blue Bell customers love our convenient oil change service that comes right to their driveway or office parking lot. We serve both residential and commercial clients throughout Blue Bell.",
    zip: "19422",
    landmarks: ["Normandy Farm", "Blue Bell Country Club", "Montgomery County Community College"],
    neighborhoods: ["Whitpain Township", "DeKalb Pike Area", "Skippack Pike"],
    popularServices: ["Full Synthetic Oil Change", "Fleet Services", "Standard Oil Change"]
  },
  // Add more cities as needed...
]

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = serviceAreas.find(area => area.slug === params.city)
  
  if (!cityData) {
    return {
      title: 'Location Not Found',
      description: 'The requested service area could not be found.',
    }
  }
  
  return {
    title: `Mobile Oil Change in ${cityData.name}, PA | ${cityData.distance} from Ambler`,
    description: `Professional mobile oil change services in ${cityData.name}, PA. We come to your home or workplace with all necessary equipment and supplies. ${cityData.content.substring(0, 100)}...`,
    keywords: `mobile oil change ${cityData.name}, oil change service ${cityData.name}, on-site oil change ${cityData.name}, ${cityData.name} PA mobile mechanic`,
  }
}

export default function CityServiceAreaPage({ params }: { params: { city: string } }) {
  const cityData = serviceAreas.find(area => area.slug === params.city)
  
  if (!cityData) {
    notFound()
  }
  
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-2 text-blue-200 flex items-center">
              <Link href="/service-areas" className="hover:underline">Service Areas</Link> 
              <span className="mx-2">›</span>
              <span>{cityData.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Oil Change in {cityData.name}, PA</h1>
            <p className="text-xl mb-6">Convenient, professional oil changes that come to your location in {cityData.name} — just {cityData.distance} from our Ambler headquarters</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> 
                {cityData.zip}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {cityData.distance} from Ambler
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-200 text-center">
                Schedule in {cityData.name}
              </Link>
              <Link href="tel:2155551234" className="bg-blue-700 hover:bg-blue-800 border border-white/30 px-6 py-3 rounded-lg font-medium transition duration-200 flex items-center justify-center">
                <PhoneCall className="h-4 w-4 mr-2" /> Call Us Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-12 bg-white" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Mobile Oil Change Services in {cityData.name}</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>Our convenient mobile oil change service is available throughout {cityData.name}, PA. {cityData.content}</p>
                
                <p>Located just {cityData.distance} from our Ambler headquarters, {cityData.name} customers enjoy prompt service with minimal wait times. We bring all necessary equipment and supplies directly to your location, whether at home or work.</p>
                
                <h3>Why {cityData.name} Residents Choose Our Mobile Oil Change</h3>
                
                <p>Residents and businesses in {cityData.name} appreciate our mobile oil change service because it eliminates the need to take time out of their busy schedules to visit an auto shop. Instead, our certified technicians come to you, performing professional oil changes while you continue with your day.</p>
                
                <h3>Areas We Serve in {cityData.name}</h3>
                
                <p>We provide service throughout {cityData.name}, including the following neighborhoods:</p>
                
                <ul>
                  {cityData.neighborhoods.map((neighborhood, index) => (
                    <li key={index}>{neighborhood}</li>
                  ))}
                </ul>
                
                <p>We regularly service customers near landmarks like {cityData.landmarks.join(', ')} and all residential and commercial areas within {cityData.name}.</p>
                
                <h3>Most Popular Services in {cityData.name}</h3>
                
                <p>{cityData.name} customers frequently request these services:</p>
                
                <ul>
                  {cityData.popularServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                
                <p>All our services include a comprehensive 21-point inspection to ensure your vehicle is in optimal condition.</p>
              </div>
              
              <div className="mt-8">
                <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View All Available Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-xl sticky top-8">
                <h3 className="text-xl font-bold mb-4">Schedule Your Mobile Oil Change</h3>
                <p className="text-gray-600 mb-6">Book your appointment today and experience the convenience of mobile oil changes in {cityData.name}.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Fast Service</h4>
                      <p className="text-sm text-gray-600">Most oil changes completed in 30-45 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Flexible Scheduling</h4>
                      <p className="text-sm text-gray-600">Evening and weekend appointments available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Service Area</h4>
                      <p className="text-sm text-gray-600">All of {cityData.name} ({cityData.zip})</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium inline-block text-center">
                    Schedule Online
                  </Link>
                  <Link href="tel:2155551234" className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-3 px-4 rounded-lg font-medium inline-flex items-center justify-center">
                    <PhoneCall className="h-4 w-4 mr-2" /> Call (215) 555-1234
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Service Area in {cityData.name}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">We provide mobile oil change services throughout {cityData.name} and surrounding areas.</p>
          
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={`/images/${cityData.slug}-service-map.jpg`}
                alt={`Map of ${cityData.name}, PA mobile oil change service area`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{cityData.name} Coverage</h3>
                  <p>We service all neighborhoods in {cityData.name}, just {cityData.distance} from our Ambler headquarters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What {cityData.name} Customers Say</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Don't just take our word for it. Here's what our {cityData.name} customers have to say about our mobile oil change service.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8
