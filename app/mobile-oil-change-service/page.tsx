tsx
import React from 'react';
import Link from 'next/link';

const MobileOilChangeServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Mobile Oil Change Service: Professional Care at Your Convenience</h1>

      <div className="mb-8">
        <p className="text-gray-700">
          Welcome to our premier mobile oil change service! We understand that your time is valuable, which is why we bring our expertise directly to you. Our mobile oil change service is designed to provide top-quality vehicle maintenance without disrupting your busy schedule. Experience the ultimate convenience of professional oil change services wherever you are.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Our Mobile Oil Change Service is Superior</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Unmatched Convenience:</strong> Service at your preferred location.</li>
          <li><strong>Time-Saving:</strong> No more wasted time at service centers.</li>
          <li><strong>Quality and Reliability:</strong> High-grade materials and expert technicians.</li>
          <li><strong>Transparent Process:</strong> Upfront pricing with detailed service descriptions.</li>
          <li><strong>Eco-Friendly Practices:</strong> We dispose of used oil responsibly.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-gray-700">
          Getting your oil changed with our mobile service is easy and hassle-free. Here’s how it works:
        </p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>
            <strong>Book Your Appointment:</strong> Schedule your service online or give us a call. Choose a time and location that suits you best.
          </li>
          <li>
            <strong>We Come to You:</strong> Our certified technician will arrive at your chosen location with all the necessary equipment.
          </li>
          <li>
            <strong>Professional Service:</strong> We perform a comprehensive oil change, including replacing your old oil and filter with high-quality replacements.
          </li>
          <li>
            <strong>Cleanup and Disposal:</strong> We ensure a clean work area and dispose of all waste responsibly.
          </li>
          <li>
            <strong>Get Back on the Road:</strong> Enjoy your day while we take care of your car.
          </li>
        </ol>
        <div className="mt-4">
            <Link href="/schedule" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
            </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileOilChangeServicePage;