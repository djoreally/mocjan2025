tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Oil Change: Your Go-To Solution for On-the-Go Maintenance',
  description: 'Experience the ultimate convenience of mobile oil change services. We bring the maintenance to you, saving you time and hassle.',
};

export default function MobileOilChangePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Mobile Oil Change: Your Go-To Solution for On-the-Go Maintenance
        </h1>
        <p className="text-lg">
          In today's fast-paced world, finding time for car maintenance can be a challenge. That's where our mobile oil change service comes in. We offer the ultimate convenience by bringing our expert services directly to you, whether you're at home, work, or anywhere else that's convenient. Say goodbye to waiting rooms and hello to hassle-free maintenance!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          The Benefits of Our Mobile Oil Change Services
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Ultimate Convenience:</strong> We come to you, wherever you are.
          </li>
          <li>
            <strong>Time-Efficient:</strong> No more waiting in lines or disrupting your day.
          </li>
          <li>
            <strong>Expert Technicians:</strong> Our certified professionals use high-quality materials and the latest techniques.
          </li>
          <li>
            <strong>Transparent Pricing:</strong> Get a quote upfront with no hidden fees.
          </li>
          <li>
            <strong>Eco-Friendly:</strong> We ensure proper disposal of old oil and filters.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          How It Works
        </h2>
        <p className="text-lg">
          Getting your oil changed with our mobile service is simple and straightforward:
        </p>
        <ol className="list-decimal list-inside text-lg">
          <li>
            <strong>Book Your Appointment:</strong> Schedule a time and location that works for you through our website or by phone.
          </li>
          <li>
            <strong>We Come to You:</strong> Our mobile unit arrives at your chosen location fully equipped.
          </li>
          <li>
            <strong>Expert Service:</strong> Our technicians perform the oil change quickly and efficiently.
          </li>
          <li>
            <strong>Enjoy Your Day:</strong> You're free to go about your business while we take care of your car.
          </li>
        </ol>
        <p className='text-lg mt-4'>
            Ready to experience the convenience of mobile oil changes? <Link href="/schedule" className='text-blue-500'>Book your appointment today!</Link>
        </p>
      </section>
    </main>
  );
}