tsx
import Link from 'next/link';

export default function OilChangeServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Comprehensive Oil Change Service: Keeping Your Engine in Peak Condition</h1>
      <div className="mb-8">
        <p className="mb-4">
          Regular oil changes are crucial for maintaining your vehicle's engine health and ensuring its longevity. Our comprehensive oil change service is designed to keep your engine running smoothly and efficiently. We go beyond just replacing the oil; we provide a thorough check to ensure your vehicle is in top condition.
        </p>
        <p>
          Neglecting regular oil changes can lead to serious engine problems, reduced fuel efficiency, and costly repairs down the road. Trust our expert team to deliver top-quality oil change services tailored to your vehicle's needs.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Oil Change Service?</h2>
        <ul className="list-disc list-inside">
          <li><strong>Comprehensive Checks:</strong> We don't just change your oil; we inspect your vehicle.</li>
          <li><strong>Quality Products:</strong> We use premium oils and filters.</li>
          <li><strong>Experienced Technicians:</strong> Our team is highly trained and dedicated to excellence.</li>
          <li><strong>Convenient Options:</strong> Choose between mobile and in-shop services.</li>
          <li><strong>Customer-Focused:</strong> We prioritize your needs and satisfaction.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How Our Oil Change Service Works</h2>
        <p className="mb-4">
          Getting your oil changed with us is simple and convenient. Here's how it works:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li><strong>Book Your Appointment:</strong> Schedule your oil change online or by phone.</li>
          <li><strong>Vehicle Inspection:</strong> Our technicians will inspect your vehicle upon arrival.</li>
          <li><strong>Oil Change:</strong> We'll perform the oil change using premium products.</li>
          <li><strong>Thorough Checks:</strong> We complete a full inspection of your vehicle</li>
          <li><strong>Completion and Review:</strong> We ensure you're satisfied with the service.</li>
        </ol>
        <p>
          Ready to experience the difference?
        </p>
        <Link href="/book" className="text-blue-500 hover:underline">
          Book Your Oil Change Now
        </Link>
      </section>
    </div>
  );
}