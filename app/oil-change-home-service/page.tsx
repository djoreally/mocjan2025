tsx
import React from 'react';
import Link from 'next/link';

const OilChangeHomeServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Oil Change Home Service: Effortless Maintenance Without Leaving Home</h1>
      <div className="mb-8">
        <p>
          Discover the ultimate convenience with our oil change home service. We bring the expertise and tools directly to you, offering a hassle-free way to maintain your vehicle without ever having to leave your home. Say goodbye to waiting rooms and hello to convenience.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Opt for Home Oil Change Service?</h2>
        <ul className="list-disc list-inside">
          <li><strong>Unmatched Convenience:</strong> We come to your home, making maintenance a breeze.</li>
          <li><strong>Time-Saving:</strong> Reclaim your day without trips to the shop.</li>
          <li><strong>Professional and Reliable:</strong> Our skilled technicians provide top-quality service.</li>
          <li><strong>Transparent Pricing:</strong> No hidden fees, just clear, upfront costs.</li>
          <li><strong>Environmentally Responsible:</strong> We handle oil disposal properly.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How Our Oil Change Home Service Works</h2>
        <p>
          Getting your oil changed at home is easy with our streamlined process:
        </p>
        <ol className="list-decimal list-inside">
          <li>
            <strong>Book Online:</strong> Schedule your service through our website or by phone.
          </li>
          <li>
            <strong>We Come to You:</strong> Our certified technicians arrive at your location with all the necessary tools and supplies.
          </li>
          <li>
            <strong>Efficient Service:</strong> We perform the oil change quickly and professionally.
          </li>
          <li>
            <strong>Clean and Tidy:</strong> We ensure everything is cleaned up, leaving no mess behind.
          </li>
          <li>
            <strong>Drive Away Satisfied:</strong> Enjoy the peace of mind knowing your car is well-maintained without disrupting your day.
          </li>
        </ol>
        <div className="mt-4">
          <Link href="/book" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Your Service Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OilChangeHomeServicePage;