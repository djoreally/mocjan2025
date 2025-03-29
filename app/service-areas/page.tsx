import Link from "next/link";

export default function ServiceAreasPage() {
  return (
    <div>
      <h1>Our Service Areas</h1>
      <ul>
        <li>
          <Link href="/oil-change-ambler-pa-19002">Oil Change in Ambler, PA 19002</Link>
        </li>
        {/* Add other service areas here */}
      </ul>
    </div>
  );
}
