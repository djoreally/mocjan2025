tsx
import Link from 'next/link';

export default function OilChangePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Oil Change Services: Convenient and Reliable Maintenance
      </h1>
      <div className="mb-8">
        <p className="text-lg">
          Regular oil changes are vital to the health and longevity of your vehicle.
          They ensure your engine runs smoothly, improves fuel efficiency, and
          helps prevent costly repairs down the road.  Our oil change service is
          designed to provide you with high quality maintenance in the most
          convenient way possible.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          The Benefits of Our Oil Change Services
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Convenience:</span> No need to
            disrupt your day or wait in line.
          </li>
          <li>
            <span className="font-semibold">Time-Saving:</span> We work around
            your schedule, not the other way around.
          </li>
          <li>
            <span className="font-semibold">Professional Service:</span> Our
            certified technicians use quality materials.
          </li>
          <li>
            <span className="font-semibold">Competitive Pricing:</span> Our
            service is priced competitively with traditional oil change shops.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-lg">
          Getting an oil change with us is simple. First, visit our booking page
          to schedule your appointment at a time and location that suits you.
          Then, our certified technician will arrive with all the necessary
          equipment to perform the oil change on your vehicle.
        </p>
        <p>
          <Link href="/schedule" className="text-blue-500 hover:underline">
            Book Your Oil Change Now
          </Link>
        </p>
      </section>
    </div>
  );
}