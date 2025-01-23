"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function FleetDashboard() {
  const [fleetData, setFleetData] = useState({
    totalVehicles: 0,
    vehiclesDueService: 0,
    lastServiceDate: "",
    upcomingAppointments: [],
  })

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setFleetData({
      totalVehicles: 50,
      vehiclesDueService: 8,
      lastServiceDate: "2023-06-15",
      upcomingAppointments: [
        { id: 1, date: "2023-06-20", vehicleId: "FL001" },
        { id: 2, date: "2023-06-22", vehicleId: "FL015" },
        { id: 3, date: "2023-06-25", vehicleId: "FL022" },
      ],
    })
  }, [])

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Services Performed",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Fleet Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Fleet Overview */}
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Vehicles</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{fleetData.totalVehicles}</dd>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Vehicles Due Service</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{fleetData.vehiclesDueService}</dd>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Last Service Date</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{fleetData.lastServiceDate}</dd>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">Next Scheduled Service</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {fleetData.upcomingAppointments[0]?.date || "N/A"}
                  </dd>
                </div>
              </div>
            </div>
          </div>

          {/* Service History Chart */}
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Service History</h2>
              <div className="mt-4" style={{ height: "300px" }}>
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Appointments</h2>
              <ul className="mt-4 divide-y divide-gray-200">
                {fleetData.upcomingAppointments.map((appointment) => (
                  <li key={appointment.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Vehicle ID: {appointment.vehicleId}</p>
                        <p className="text-sm text-gray-500">Date: {appointment.date}</p>
                      </div>
                      <Link
                        href={`/fleet-dashboard/appointment/${appointment.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        View Details
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/fleet-dashboard/vehicles"
                className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">Manage Vehicles</h3>
                <p className="mt-1 text-sm text-gray-500">View and manage your fleet vehicles.</p>
              </Link>
              <Link
                href="/fleet-dashboard/appointments"
                className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">Appointments</h3>
                <p className="mt-1 text-sm text-gray-500">Schedule and view upcoming service appointments.</p>
              </Link>
              <Link
                href="/fleet-dashboard/reports"
                className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">View Reports</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Access detailed reports on your fleet's performance and maintenance history.
                </p>
              </Link>
              <Link
                href="/fleet-dashboard/settings"
                className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">Settings</h3>
                <p className="mt-1 text-sm text-gray-500">Manage your account and fleet settings.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

