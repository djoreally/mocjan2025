tsx
import Link from 'next/link';

export default function MobileOilChangeNearMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Mobile Oil Change Near Me: Unmatched Convenience at Your Doorstep</h1>
      <section className="mb-8">
        <p className="mb-4">
          Are you tired of wasting your precious time waiting at traditional oil change shops? 
          Our mobile oil change service brings the expertise of a professional auto shop directly to your location. 
          Whether you're at home, at work, or anywhere within our service area, we make maintaining your vehicle's engine health as convenient as possible.
           Say goodbye to long waits and hello to a streamlined, hassle-free oil change experience!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Our Mobile Oil Change Service Stands Out</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong className="font-medium">Unmatched Convenience:</strong> We come directly to your home or workplace.
          </li>
          <li className="mb-2">
            <strong className="font-medium">Time-Saving:</strong> No more waiting rooms or service center queues.
          </li>
          <li className="mb-2">
            <strong className="font-medium">Expert Service:</strong> Our technicians are highly trained and equipped for any job.
          </li>
          <li className="mb-2">
            <strong className="font-medium">Transparent Pricing:</strong> No hidden fees or surprises, just clear, upfront pricing.
          </li>
          <li className="mb-2">
            <strong className="font-medium">Eco-Friendly:</strong> We dispose of used oil and filters responsibly.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4">
          Getting a mobile oil change is simple and straightforward:
        </p>
        <ol className="list-decimal list-inside">
          <li className="mb-2">
            <strong>Book Your Appointment:</strong> Visit our website or call us to schedule your service at a time and location that suits you.
          </li>
          <li className="mb-2">
            <strong>We Come To You:</strong> Our mobile oil change unit will arrive at your designated location at the scheduled time.
          </li>
          <li className="mb-2">
            <strong>Professional Service:</strong> Our certified technician will perform a high-quality oil change, ensuring everything is done to the highest standards.
          </li>
          <li className="mb-2">
            <strong>Enjoy Your Day:</strong> While we take care of your car, you can focus on what matters most.
          </li>
        </ol>
        <div className="mt-6">
          <Link href="/schedule" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}