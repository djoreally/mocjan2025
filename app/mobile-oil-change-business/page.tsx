tsx
import React from 'react';
import Link from 'next/link';

const MobileOilChangeBusinessPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mobile Oil Change Business: Innovative and Convenient Auto Care</h1>

      <section className="mb-8">
        <p className="mb-4">
          Welcome to the future of auto maintenance! Our mobile oil change business is revolutionizing how you care for your vehicle. We bring professional, high-quality oil change services directly to your home or office, offering an unparalleled level of convenience and efficiency.
        </p>
        <p>
        Gone are the days of long waits and inconvenient trips to the mechanic. With our mobile oil change service, you can maintain your vehicle without disrupting your busy schedule.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Advantages of Choosing a Mobile Oil Change Business</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Convenience Redefined:</strong> Service at your doorstep, eliminating the need for travel.
          </li>
          <li className="mb-2">
            <strong>Time-Saving:</strong> Get back to your schedule with minimal disruption.
          </li>
          <li className="mb-2">
            <strong>Specialized Expertise:</strong> Our technicians are highly trained for mobile operations.
          </li>
          <li className="mb-2">
            <strong>Transparent Pricing:</strong> No hidden costs, just clear, upfront pricing.
          </li>
          <li className="mb-2">
            <strong>Eco-Conscious:</strong> We manage and dispose of used oil responsibly.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4">
          Getting your oil changed with our mobile service is simple and hassle-free:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Book Your Appointment:</strong> Schedule a time and location that works for you through our online booking system.
          </li>
          <li className="mb-2">
            <strong>We Come to You:</strong> Our mobile unit arrives at your designated location fully equipped.
          </li>
          <li className="mb-2">
            <strong>Professional Service:</strong> Our certified technicians perform the oil change using high-quality materials.
          </li>
          <li className="mb-2">
            <strong>Enjoy Your Day:</strong> Continue with your activities while we take care of your vehicle.
          </li>
        </ol>
        <p>Ready to experience the ultimate convenience in car care? <Link href="/book" className="text-blue-500 hover:underline">Book your mobile oil change appointment</Link> today!</p>
      </section>
    </div>
  );
};

export default MobileOilChangeBusinessPage;