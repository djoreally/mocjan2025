"use client"

import { useState } from "react"

const CostCalculator = () => {
  const [vehicleType, setVehicleType] = useState("car")
  const [oilType, setOilType] = useState("conventional")
  const [quantity, setQuantity] = useState(1)

  const prices = {
    car: {
      conventional: 39.99,
      synthetic: 69.99,
    },
    truck: {
      conventional: 49.99,
      synthetic: 79.99,
    },
  }

  const calculateCost = () => {
    const basePrice = prices[vehicleType][oilType]
    return (basePrice * quantity).toFixed(2)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cost Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="car">Car</option>
            <option value="truck">Truck</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Oil Type</label>
          <select
            value={oilType}
            onChange={(e) => setOilType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="conventional">Conventional</option>
            <option value="synthetic">Synthetic</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Vehicles</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold">Estimated Cost: ${calculateCost()}</p>
        </div>
      </div>
    </div>
  )
}

export default CostCalculator

