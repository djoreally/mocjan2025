import { Check, X } from "lucide-react"

const ComparisonTable = () => {
  const comparisonData = [
    { feature: "Convenience", onsite: true, traditional: false },
    { feature: "Reduced Downtime", onsite: true, traditional: false },
    { feature: "Cost-Effective", onsite: true, traditional: false },
    { feature: "Flexible Scheduling", onsite: true, traditional: false },
    { feature: "Specialized Equipment", onsite: false, traditional: true },
    { feature: "Complex Repairs", onsite: false, traditional: true },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Feature</th>
            <th className="border p-3 text-center">Onsite Maintenance</th>
            <th className="border p-3 text-center">Traditional Maintenance</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border p-3">{item.feature}</td>
              <td className="border p-3 text-center">
                {item.onsite ? (
                  <Check className="inline-block text-green-500" />
                ) : (
                  <X className="inline-block text-red-500" />
                )}
              </td>
              <td className="border p-3 text-center">
                {item.traditional ? (
                  <Check className="inline-block text-green-500" />
                ) : (
                  <X className="inline-block text-red-500" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable

