import { useRouter } from 'next/router';
import Image from 'next/image'; // Ensure Image is imported correctly

export default function AmblerServiceAreaPage() {
  const router = useRouter();
  const { city } = router.query; // Extract city from query parameters

  // Ensure the URL does not include the (app) segment

  return (
    <div>
      <h1>Mobile Oil Change in {city} Service Area | Convenient On-Demand Service</h1>
      <p>Experience the best mobile oil change services in {city}. Our professional team comes to you for convenient and high-quality oil changes.</p>
      <p>We provide the best mobile oil change services, tailored to meet your needs. Whether you're at home, work, or anywhere else, we bring our services to you.</p>
      <p>Our team is dedicated to providing high-quality oil changes using top-notch products. We understand the importance of maintaining your vehicle, and our services are designed to keep your car running smoothly.</p>
      <h2>Why Choose Our Mobile Oil Change Service?</h2>
      <p>Contact us today to schedule your mobile oil change in {city}, and experience the difference!</p>
      <h2>Areas We Serve</h2>
      <p>We proudly serve {city} and its surrounding neighborhoods, including Upper Dublin, Lower Gwynedd, and more.</p>
      <h3>Convenience at Your Location</h3>
      <p>Our team is dedicated to providing high-quality oil changes using top-notch products. We understand the importance of maintaining your vehicle, and our services are designed to keep your car running smoothly.</p>
      <h3>Quality Products and Services</h3>
      <p>Don't wait for your next oil change; let us come to you!</p>
      <Image src="/path/to/image.jpg" alt="Mobile Oil Change Service in {city}" title="Mobile Oil Change in {city}" />
    </div>
  );
}
