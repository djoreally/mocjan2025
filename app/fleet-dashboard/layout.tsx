import Link from "next/link"
import { Cog, LogOut } from "lucide-react"

export default function FleetDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/fleet-dashboard" className="flex-shrink-0">
                <span className="text-white text-lg font-semibold">MOMS Fleet Dashboard</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/fleet-dashboard"
                    className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/fleet-dashboard/vehicles"
                    className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Vehicles
                  </Link>
                  <Link
                    href="/fleet-dashboard/appointments"
                    className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Appointments
                  </Link>
                  <Link
                    href="/fleet-dashboard/reports"
                    className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/fleet-dashboard/settings" className="text-white hover:bg-blue-500 p-1 rounded-full">
                  <Cog className="h-6 w-6" />
                </Link>
                <Link href="/fleet-login" className="text-white hover:bg-blue-500 p-1 rounded-full ml-3">
                  <LogOut className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  )
}

