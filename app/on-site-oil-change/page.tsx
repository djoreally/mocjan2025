tsx
import Link from 'next/link';

export default function OnSiteOilChange() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">On-Site Oil Change: Bringing Maintenance to Your Location</h1>
      <div className="mb-8">
        <p className="mb-4">
          Discover the ultimate convenience of on-site oil change services. We bring our expertise directly to you,
          eliminating the need to travel to a service center. Our on-site service is perfect for busy individuals,
          families, and businesses looking to maintain their vehicles without disrupting their daily routines.
        </p>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose On-Site Oil Change?</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Ultimate Convenience:</strong> We come to you, wherever you are.
          </li>
          <li className="mb-2">
            <strong>No Downtime:</strong> Continue with your day uninterrupted.
          </li>
          <li className="mb-2">
            <strong>Professional Service:</strong> Our certified technicians use top-quality materials.
          </li>
          <li className="mb-2">
            <strong>Transparent Pricing:</strong> Clear, upfront costs with no hidden fees.
          </li>
          <li className="mb-2">
            <strong>Environmentally Conscious:</strong> Proper disposal of used oil and filters.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="mb-4">
          Getting an on-site oil change is simple. Just book an appointment online or give us a call. We'll schedule a
          time that fits your convenience. Our certified technicians will arrive at your location with all the necessary
          tools and supplies. We'll perform the oil change efficiently and professionally, allowing you to go about your day
          without any interruptions.
        </p>
        <div className="text-center">
          <Link href="/book" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Your On-Site Oil Change Now
          </Link>
        </div>
      </section>
    </div>
  );
}