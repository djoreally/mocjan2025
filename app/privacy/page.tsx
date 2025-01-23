export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us, including when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Schedule an appointment</li>
            <li>Create an account</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us for support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our services</li>
            <li>Process your appointments and transactions</li>
            <li>Send you service reminders and updates</li>
            <li>Respond to your comments and questions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with
            service providers who assist us in operating our business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@momsoilchange.com" className="text-blue-600 hover:underline">
              privacy@momsoilchange.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

