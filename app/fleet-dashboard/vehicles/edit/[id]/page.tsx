"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Vehicle {
  id: number
  vin: string
  plate: string
  year: string
  make: string
  model: string
  mileage: string
  serviceInterval: string
}

export default function EditVehiclePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the vehicle data from an API
    const mockVehicle: Vehicle = {
      id: Number.parseInt(params.id),
      vin: "1HGCM82633A004352",
      plate: "ABC123",
      year: "2020",
      make: "Toyota",
      model: "Camry",
      mileage: "25000",
      serviceInterval: "5000",
    }
    setVehicle(mockVehicle)
  }, [params.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setVehicle((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!vehicle) return

    // In a real application, you would send this data to your API
    console.log("Updating vehicle:", vehicle)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/fleet-dashboard/vehicles")
  }

  if (!vehicle) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Vehicle</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="vin" className="block text-sm font-medium text-gray-700">
                    VIN
                  </label>
                  <input
                    type="text"
                    name="vin"
                    id="vin"
                    value={vehicle.vin}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="plate" className="block text-sm font-medium text-gray-700">
                    License Plate
                  </label>
                  <input
                    type="text"
                    name="plate"
                    id="plate"
                    value={vehicle.plate}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    id="year"
                    value={vehicle.year}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                    Make
                  </label>
                  <input
                    type="text"
                    name="make"
                    id="make"
                    value={vehicle.make}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    id="model"
                    value={vehicle.model}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
                    Mileage
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    id="mileage"
                    value={vehicle.mileage}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="serviceInterval" className="block text-sm font-medium text-gray-700">
                    Service Interval (miles)
                  </label>
                  <input
                    type="number"
                    name="serviceInterval"
                    id="serviceInterval"
                    value={vehicle.serviceInterval}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

