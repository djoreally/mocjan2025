"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, Clock, FileText, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

interface Appointment {
  id: number
  vehicleIds: number[]
  vehicleNames: string[]
  date: string
  time: string
  note?: string
  isRecurring: boolean
  recurringFrequency?: "weekly" | "monthly" | "quarterly"
}

export default function AppointmentsPage() {
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sortBy, setSortBy] = useState<"date" | "vehicleName">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [filterDate, setFilterDate] = useState("")
  const [filterVehicle, setFilterVehicle] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    fetchAppointments()
  }, [currentPage, sortBy, sortOrder, filterDate, filterVehicle])

  const fetchAppointments = async () => {
    // In a real application, you would fetch this data from an API
    // This is a mock implementation
    const mockAppointments: Appointment[] = [
      {
        id: 1,
        vehicleIds: [1, 2],
        vehicleNames: ["2020 Toyota Camry", "2019 Honda Civic"],
        date: "2023-06-20",
        time: "10:00",
        note: "Regular maintenance",
        isRecurring: true,
        recurringFrequency: "monthly",
      },
      {
        id: 2,
        vehicleIds: [3],
        vehicleNames: ["2021 Ford F-150"],
        date: "2023-06-22",
        time: "14:30",
        note: "Oil change",
        isRecurring: false,
      },
      // Add more mock appointments here...
    ]

    // Apply filters
    let filteredAppointments = mockAppointments
    if (filterDate) {
      filteredAppointments = filteredAppointments.filter((app) => app.date === filterDate)
    }
    if (filterVehicle) {
      filteredAppointments = filteredAppointments.filter((app) =>
        app.vehicleNames.some((name) => name.toLowerCase().includes(filterVehicle.toLowerCase())),
      )
    }

    // Apply sorting
    filteredAppointments.sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
      } else {
        return sortOrder === "asc"
          ? a.vehicleNames[0].localeCompare(b.vehicleNames[0])
          : b.vehicleNames[0].localeCompare(a.vehicleNames[0])
      }
    })

    // Apply pagination
    const itemsPerPage = 10
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedAppointments = filteredAppointments.slice(startIndex, endIndex)

    setAppointments(paginatedAppointments)
    setTotalPages(Math.ceil(filteredAppointments.length / itemsPerPage))
  }

  const handleEdit = (id: number) => {
    router.push(`/fleet-dashboard/appointments/edit/${id}`)
  }

  const handleCancel = async (id: number) => {
    try {
      // In a real application, you would send a request to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setAppointments(appointments.filter((app) => app.id !== id))
      toast({
        title: "Appointment Cancelled",
        description: "The appointment has been successfully cancelled.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel the appointment. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-4 flex justify-between items-center">
              <Link
                href="/fleet-dashboard/appointmentshttps://moms.bookyouroilchange.com/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Schedule New Appointment
              </Link>
              <div className="flex space-x-4">
                <Input
                  type="date"
                  placeholder="Filter by date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Filter by vehicle"
                  value={filterVehicle}
                  onChange={(e) => setFilterVehicle(e.target.value)}
                />
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as "date" | "vehicleName")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="vehicleName">Vehicle Name</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as "asc" | "desc")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <li key={appointment.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {appointment.vehicleNames.join(", ")}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(appointment.id)}>
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Cancel
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently cancel the appointment.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleCancel(appointment.id)}>
                                  Confirm
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {appointment.date}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {appointment.time}
                          </p>
                        </div>
                        {appointment.note && (
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <FileText className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {appointment.note}
                          </div>
                        )}
                      </div>
                      {appointment.isRecurring && (
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          Recurring: {appointment.recurringFrequency}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

