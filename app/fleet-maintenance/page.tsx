import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import ComparisonTable from "@/components/ComparisonTable"
import FleetMaintenanceForm from "@/components/FleetMaintenanceForm"

export const metadata: Metadata = {
  title: "Fleet Maintenance Services | MOMS Mobile Oil Change",
  description:
    "Discover the benefits of our onsite fleet maintenance services. Reduce downtime, increase efficiency, and keep your fleet running smoothly with MOMS Mobile Oil Change.",
}

export default function FleetMaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Fleet Maintenance Services</h1>
              <p className="text-xl mb-6">Keep your fleet running efficiently with our onsite maintenance solutions</p>
              <Link
                href="#get-quote"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
              >
                Get a Custom Quote
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_278362374_926603717996609_6261952984645302827_n.webp-RQWYPak22nLJNxPvNFsYSfXcnDcdcy.jpeg"
                alt="MOMS Fleet Maintenance Service"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Onsite Maintenance Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Onsite Fleet Maintenance?</h2>

            <p className="mb-4 text-lg">
              Onsite fleet maintenance brings your service directly to your vehicles, minimizing downtime and
              eliminating the need for transportation to a repair shop. It's ideal for fleets looking for convenient,
              flexible, and cost-effective solutions, especially for routine maintenance like oil changes, tire
              rotations, and inspections.
            </p>

            <p className="mb-4 text-lg">
              With onsite services, you save time, reduce costs, and ensure your vehicles stay on the road longer. This
              means more efficient operations and improved bottom line for your business.
            </p>

            <div className="mb-6 text-center">
              <Link
                href="#get-quote"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Schedule Your Onsite Service
              </Link>
            </div>

            <p className="mb-4 text-lg">
              Traditional fleet maintenance offers more specialized repairs but comes with more downtime and logistical
              challenges. For a smoother, more efficient fleet operation, onsite maintenance is the way to go.
            </p>

            <div className="text-center">
              <Link
                href="#comparison"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300"
              >
                Compare Onsite vs Traditional Maintenance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Onsite Fleet Maintenance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reduced Downtime",
                description: "Minimize vehicle downtime with our efficient onsite services",
              },
              { title: "Cost-Effective", description: "Save on transportation costs and indirect expenses" },
              { title: "Flexible Scheduling", description: "Service your fleet at times that suit your operations" },
              {
                title: "Customized Solutions",
                description: "Tailored maintenance plans for your specific fleet needs",
              },
              { title: "Preventive Care", description: "Regular maintenance to prevent costly breakdowns" },
              { title: "Expert Technicians", description: "Skilled professionals with fleet-specific expertise" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onsite vs. Traditional Fleet Maintenance</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Fleet Maintenance?</h2>
          <p className="text-xl mb-8">Let us create a customized maintenance plan for your fleet</p>
          <Link
            href="#get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="get-quote" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get a Custom Fleet Maintenance Quote</h2>
          <FleetMaintenanceForm />
        </div>
      </section>
    </div>
  )
}

