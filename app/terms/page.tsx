export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with
            any part of the terms, you may not access our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
          <p className="mb-4">
            MOMS Mobile Oil Change provides mobile oil change and fleet maintenance services. Our services include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mobile oil changes</li>
            <li>Fleet maintenance services</li>
            <li>Scheduled maintenance appointments</li>
            <li>Related automotive services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Scheduling and Cancellations</h2>
          <p className="mb-4">
            Appointments can be scheduled through our website or by phone. We request 24-hour notice for cancellations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
          <p>
            Payment is due at the time of service. We accept major credit cards, cash, and approved fleet payment
            methods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Warranty</h2>
          <p>Our services come with a standard warranty. Specific terms and conditions apply to different services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            MOMS Mobile Oil Change is not liable for indirect, incidental, special, or consequential damages resulting
            from the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:legal@momsoilchange.com" className="text-blue-600 hover:underline">
              legal@momsoilchange.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

