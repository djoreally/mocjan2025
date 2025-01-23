"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"

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

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockVehicles: Vehicle[] = [
      {
        id: 1,
        vin: "1HGCM82633A004352",
        plate: "ABC123",
        year: "2020",
        make: "Toyota",
        model: "Camry",
        mileage: "25000",
        serviceInterval: "5000",
      },
      {
        id: 2,
        vin: "2T1KR32E13C078742",
        plate: "XYZ789",
        year: "2019",
        make: "Honda",
        model: "Civic",
        mileage: "35000",
        serviceInterval: "7500",
      },
    ]
    setVehicles(mockVehicles)
  }, [])

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      // In a real application, you would send a delete request to your API
      console.log("Deleting vehicle with id:", id)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Fleet Vehicles</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-4">
              <Link
                href="/fleet-dashboard/vehicles/add"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Add New Vehicle
              </Link>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {vehicles.map((vehicle) => (
                  <li key={vehicle.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <Link
                            href={`/fleet-dashboard/vehicles/edit/${vehicle.id}`}
                            className="mr-2 inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                          >
                            <Pencil className="h-4 w-4 mr-1" />
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(vehicle.id)}
                            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">VIN: {vehicle.vin}</p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            Plate: {vehicle.plate}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>Mileage: {vehicle.mileage}</p>
                          <p className="ml-6">Service Interval: {vehicle.serviceInterval} miles</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

