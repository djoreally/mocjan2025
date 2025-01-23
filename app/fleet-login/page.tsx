import Link from "next/link"
import FleetLoginForm from "./FleetLoginForm"

export default function FleetLoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Fleet Login</h2>
        </div>
        <FleetLoginForm />
        <div className="text-sm text-center">
          <Link href="/contact" className="font-medium text-blue-600 hover:text-blue-500">
            Need help? Contact support
          </Link>
        </div>
      </div>
    </div>
  )
}

