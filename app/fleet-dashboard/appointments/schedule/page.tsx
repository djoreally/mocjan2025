"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Plus, Minus } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Vehicle {
  id: number
  vin: string
  year: string
  make: string
  model: string
}

const appointmentSchema = z.object({
  vehicles: z.array(z.number()).min(1, "Select at least one vehicle"),
  date: z.date().min(new Date(), "Cannot schedule appointments in the past"),
  time: z.string().min(1, "Select a time"),
  note: z.string().optional(),
  isRecurring: z.boolean(),
  recurringFrequency: z.enum(["weekly", "monthly", "quarterly"]).optional(),
  recurringEndDate: z.date().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

export default function ScheduleAppointmentPage() {
  const router = useRouter()
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      vehicles: [],
      date: new Date(),
      time: "",
      note: "",
      isRecurring: false,
    },
  })

  const isRecurring = watch("isRecurring")

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockVehicles: Vehicle[] = [
      { id: 1, vin: "1HGCM82633A004352", year: "2020", make: "Toyota", model: "Camry" },
      { id: 2, vin: "2T1KR32E13C078742", year: "2019", make: "Honda", model: "Civic" },
    ]
    setVehicles(mockVehicles)
  }, [])

  useEffect(() => {
    const date = watch("date")
    if (date) {
      fetchAvailableTimeSlots(date)
    }
  }, [watch("date")])

  const fetchAvailableTimeSlots = async (date: Date) => {
    // In a real application, you would fetch available time slots from your API
    const mockTimeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"]
    setAvailableTimeSlots(mockTimeSlots)
  }

  const onSubmit = async (data: AppointmentFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      // In a real application, you would send this data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check for conflicts
      const hasConflicts = await checkForConflicts(data)
      if (hasConflicts) {
        throw new Error("There is a scheduling conflict. Please choose a different time.")
      }

      console.log("Scheduling appointment:", data)

      toast({
        title: "Appointment Scheduled",
        description: "Your appointment has been successfully scheduled.",
      })

      router.push("/fleet-dashboard/appointments")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const checkForConflicts = async (data: AppointmentFormData) => {
    // In a real application, you would check for conflicts with your API
    // This is a mock implementation
    return false
  }

  const handleSelectAllVehicles = () => {
    setValue(
      "vehicles",
      vehicles.map((v) => v.id),
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Schedule Appointment</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
            >
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Vehicles</label>
                <div className="space-y-2">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="flex items-center">
                      <Controller
                        name="vehicles"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            checked={field.value.includes(vehicle.id)}
                            onCheckedChange={(checked) => {
                              const updatedVehicles = checked
                                ? [...field.value, vehicle.id]
                                : field.value.filter((id: number) => id !== vehicle.id)
                              field.onChange(updatedVehicles)
                            }}
                          />
                        )}
                      />
                      <label className="ml-2">
                        {vehicle.year} {vehicle.make} {vehicle.model} (VIN: {vehicle.vin})
                      </label>
                    </div>
                  ))}
                </div>
                <Button type="button" onClick={handleSelectAllVehicles} className="mt-2" variant="outline">
                  Select Entire Fleet
                </Button>
                {errors.vehicles && <p className="text-red-500 text-sm mt-1">{errors.vehicles.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Select Date</label>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      className="rounded-md border mt-1"
                      disabled={(date) =>
                        date < new Date() || date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                      }
                    />
                  )}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
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
                  )}
                />
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
              </div>

              <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                  Additional Notes (Optional)
                </label>
                <Controller
                  name="note"
                  control={control}
                  render={({ field }) => <Textarea {...field} className="mt-1" rows={3} />}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recurring Appointment</label>
                <Controller
                  name="isRecurring"
                  control={control}
                  render={({ field }) => <Checkbox checked={field.value} onCheckedChange={field.onChange} />}
                />
                <span className="ml-2">Make this a recurring appointment</span>
              </div>

              {isRecurring && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recurring Frequency</label>
                    <Controller
                      name="recurringFrequency"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup onValueChange={field.onChange} value={field.value}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weekly" id="weekly" />
                            <Label htmlFor="weekly">Weekly</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <Label htmlFor="monthly">Monthly</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="quarterly" id="quarterly" />
                            <Label htmlFor="quarterly">Quarterly</Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Recurring End Date</label>
                    <Controller
                      name="recurringEndDate"
                      control={control}
                      render={({ field }) => (
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="rounded-md border mt-1"
                          disabled={(date) => date <= watch("date")}
                        />
                      )}
                    />
                  </div>
                </>
              )}

              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Scheduling...
                    </>
                  ) : (
                    "Schedule Appointment"
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

