import { useRouter } from 'next/router'; // Ensure correct import for routing

export default function DoylestownServiceAreaPage() {
  const router = useRouter();
  const { city } = router.query; // Extract city from query parameters

  // Ensure the URL does not include the (app) segment

  return (
    <div>
      <h1>Mobile Oil Change in {city} Service Area</h1>
      <p>On-Demand Oil Change Services in {city}</p>
      <p>Best Mobile Oil Change Services Available in {city}</p>
      <p>We Bring Our Mobile Oil Change Services to You in {city}!</p>
    </div>
  );
}
