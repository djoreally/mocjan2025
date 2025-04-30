tsx
import Link from 'next/link';

export default function OilChangeAtHomeService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Oil Change At Home Service: Convenient and Expert Vehicle Care</h1>
      <div className="prose max-w-none mb-8">
        <p>
          Maintaining your vehicle's engine health is crucial, but it doesn't have to disrupt your busy life. Our Oil Change At Home Service offers a hassle-free solution, bringing expert vehicle care right to your doorstep. Forget about waiting rooms and inconvenient appointments—experience the ultimate convenience of having your oil change performed at your home, on your schedule.
        </p>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Choosing Oil Change At Home Service</h2>
        <ul className="list-disc list-inside">
          <li><strong>Ultimate Convenience:</strong> We bring the service to you, wherever you are at home.</li>
          <li><strong>Save Time:</strong> Skip the waiting room and focus on what matters.</li>
          <li><strong>Expert Service:</strong> Certified technicians with high-quality equipment.</li>
          <li><strong>Transparent Pricing:</strong> No hidden costs, just straightforward pricing.</li>
          <li><strong>Environmentally Friendly:</strong> Responsible oil disposal practices.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p>
          Getting an oil change at home is simple and stress-free:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li><strong>Book Your Appointment:</strong> Schedule your oil change online or by phone at a time that suits you.</li>
          <li><strong>We Come to You:</strong> Our mobile technicians arrive at your home fully equipped.</li>
          <li><strong>Expert Service:</strong> We perform a thorough oil change, ensuring your engine runs smoothly.</li>
          <li><strong>Clean-Up and Go:</strong> We leave your property as clean as we found it, disposing of used oil responsibly.</li>
        </ol>
        <p>
          Ready to experience the convenience of our Oil Change At Home Service?
        </p>
        <Link href="/schedule" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </Link>
      </section>
    </div>
  );
}