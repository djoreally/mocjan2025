import Image from "next/image";
import { Check } from "lucide-react";

export const metadata = {
  title: "Top 5 Motor Oils by MOMS Oil Change | Ultimate Engine Performance",
  description:
    "Explore the MOMS Oil Change top-rated motor oils for superior engine protection. Discover the best motor oils trusted by professionals for optimal vehicle performance.",
};

export default function TopMotorOilsPage() {
  const oils = [
    {
      name: "Mobil 1 Extended Performance",
      description:
        "Mobil 1 Extended Performance is engineered for maximum engine life, providing protection for up to 20,000 miles. It’s a favorite among professionals for its exceptional performance and reliability.",
      image: "/images/mobil1.jpg", // Replace with your image path
    },
    {
      name: "Castrol EDGE Advanced Full Synthetic",
      description:
        "Trusted by experts, Castrol EDGE delivers unbeatable performance under extreme pressure. Its advanced formula reduces engine wear and boosts power output.",
      image: "/images/castrol-edge.jpg", // Replace with your image path
    },
    {
      name: "Valvoline Advanced Full Synthetic",
      description:
        "Valvoline Advanced Full Synthetic offers superior wear protection and is designed to keep your engine clean and running smoothly, even in harsh conditions.",
      image: "/images/valvoline.jpg", // Replace with your image path
    },
    {
      name: "Shell Rotella T6",
      description:
        "A top choice for diesel engines, Shell Rotella T6 provides outstanding wear protection, fuel economy, and engine cleanliness for heavy-duty performance.",
      image: "/images/shell-rotella.jpg", // Replace with your image path
    },
    {
      name: "Pennzoil Ultra Platinum",
      description:
        "Crafted from natural gas, Pennzoil Ultra Platinum keeps engines cleaner than any leading oil. It's the ideal choice for maximizing fuel efficiency and engine life.",
      image: "/images/pennzoil.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Top 5 Motor Oils Recommended by MOMS Oil Change
      </h1>
      <p className="text-lg mb-8 text-center">
        At <strong>MOMS Oil Change</strong>, we believe your engine deserves the best. That’s why we’ve curated this list of the top 5 motor oils trusted by experts for their outstanding performance and protection. Explore these options and keep your vehicle running like new.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {oils.map((oil, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200"
          >
            <Image
              src={oil.image}
              alt={`${oil.name} - Recommended by MOMS Oil Change`}
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{oil.name}</h2>
            <p className="text-gray-700 mb-4">{oil.description}</p>
            <div className="flex items-center mt-4">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span className="text-sm text-gray-600">
                MOMS Trusted Recommendation
              </span>
            </div>
          </div>
        ))}
      </div>
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose MOMS Oil Change?</h2>
        <p className="text-lg mb-6">
          MOMS Oil Change is dedicated to providing exceptional service, premium products, and expert recommendations. From synthetic oils to advanced engine care, trust us to keep your vehicle in peak condition.
        </p>
        <a
          href="/services"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Learn More About Our Services
        </a>
      </section>
    </div>
  );
}
