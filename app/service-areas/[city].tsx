import { useRouter } from 'next/router';

export default function ServiceAreaPage() {
  const router = useRouter();
  const { city } = router.query;

  return (
    <div>
      <h1>Mobile Oil Change in {city}, PA</h1>
      <p>On-Demand Oil Change in {city}</p>
      <p>Best Mobile Oil Change Near Me in {city}</p>
      <p>We Come to You! Mobile Oil Changes in {city}</p>
    </div>
  );
}
