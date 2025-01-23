"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

interface Appointment {
  id: number
  vehicleId: number
  vehicleName: string
  date: Date
  time: string
  note?: string
}

export default function EditAppointmentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [appointment, setAppointment] = useState<Appointment | null>(null)
  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<string>("")
  const [note, setNote] = useState<string>("")
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        // In a real application, you would fetch the appointment data from your API
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const mockAppointment: Appointment = {
          id: Number.parseInt(params.id),
          vehicleId: 1,
          vehicleName: "2020 Toyota Camry",
          date: new Date("2023-06-20"),
          time: "10:00",
          note: "Regular maintenance",
        }
        setAppointment(mockAppointment)
        setDate(mockAppointment.date)
        setTime(mockAppointment.time)
        setNote(mockAppointment.note || "")
      } catch (err) {
        setError("Failed to fetch appointment details")
      }
    }

    fetchAppointment()
  }, [params.id])

  useEffect(() => {
    if (date) {
      // In a real application, you would fetch available time slots from your API
      const mockTimeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"]
      setAvailableTimeSlots(mockTimeSlots)
    }
  }, [date])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (!appointment || !date || !time) {
        throw new Error("Please fill in all required fields")
      }

      // In a real application, you would send this data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Updating appointment:", { ...appointment, date, time, note })

      toast({
        title: "Appointment Updated",
        description: "Your appointment has been successfully updated.",
      })

      router.push("/fleet-dashboard/appointments")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (!appointment) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Appointment</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div>
                <p className="text-sm font-medium text-gray-700">Vehicle</p>
                <p className="mt-1 text-sm text-gray-900">{appointment.vehicleName}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Select Date</label>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border mt-1" />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <Select onValueChange={setTime} value={time}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                  Additional Notes (Optional)
                </label>
                <Textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} className="mt-1" rows={3} />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Update Appointment"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

