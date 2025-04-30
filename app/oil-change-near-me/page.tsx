tsx
import Link from 'next/link';

export default function OilChangeNearMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Oil Change Near Me: Quick, Reliable, and Convenient Service</h1>
      <div className="prose max-w-none mb-8">
        <p>
          Finding a dependable oil change service nearby can sometimes feel like a challenge. You need a place that’s not only close but also provides quality service without eating up your entire day. That’s where we come in. Our oil change service is designed with your convenience in mind, offering fast, reliable, and professional oil changes right in your local area. Whether you’re a busy professional or a family on the go, we make sure your vehicle’s oil change is one less thing to worry about.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us for Your Next Oil Change?</h2>
        <ul className="list-disc list-inside">
          <li><strong>Local Expertise:</strong> We understand the needs of our community.</li>
          <li><strong>Fast Service:</strong> Get back on the road quickly.</li>
          <li><strong>Quality Products:</strong> We use only the best oils and filters.</li>
          <li><strong>Experienced Technicians:</strong> Our team is highly skilled and professional.</li>
          <li><strong>Convenient Locations:</strong> Easily accessible service points or mobile options.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <div className="prose max-w-none">
          <p>
            Getting your oil changed with us is simple and straightforward:
          </p>
          <ol className="list-decimal list-inside">
            <li><strong>Schedule Your Appointment:</strong> Book online or give us a call to set up a time that works for you.</li>
            <li><strong>Visit Us or We Come to You:</strong> Come to one of our convenient locations or opt for our mobile service and we’ll come to you.</li>
            <li><strong>Expert Service:</strong> Our technicians perform your oil change using top-quality materials and precise techniques.</li>
            <li><strong>Drive Away Satisfied:</strong> Enjoy peace of mind knowing your vehicle is well-maintained.</li>
          </ol>
          <p>
            Ready to experience hassle-free oil change service? <Link href="/schedule" className="text-blue-600 hover:underline">Book your appointment now</Link>!
          </p>
        </div>
      </section>
    </div>
  );
}