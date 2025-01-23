"use client";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oil Change Services | MOMS Mobile Oil Change',
  description:
    'Explore professional oil change services by MOMS Mobile Oil Change. We provide efficient and affordable mobile oil changes at your convenience.',
};

export default function OilChangePage() {
  return (
    <main>
      <section className="hero">
        <h1>Oil Change Services</h1>
        <p>
          Keep your vehicle running smoothly with our expert mobile oil change
          services. Fast, affordable, and at your convenience.
        </p>
      </section>
      <section className="services-details">
        <h2>What We Offer</h2>
        <ul>
          <li>Full-service oil changes</li>
          <li>High-quality oil and filters</li>
          <li>Flexible scheduling</li>
        </ul>
      </section>
      <section className="contact-cta">
        <h2>Book Your Oil Change Today!</h2>
        <p>We come to you! Schedule your appointment online now.</p>
        <a href="/booking" className="btn">
          Book Now
        </a>
      </section>
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 2rem;
          background-color: #f5f5f5;
        }
        .services-details {
          padding: 2rem;
        }
        .contact-cta {
          text-align: center;
          margin-top: 2rem;
        }
        .btn {
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          text-decoration: none;
        }
      `}</style>
    </main>
  );
}
