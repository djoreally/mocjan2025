"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import styles from "./BookingSystem.module.css"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/light.css"
import { parseVehicleData, getUniqueValues, filterVehicles } from "@/utils/vehicleData"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import type { AppointmentFormData } from "@/types" // Import the type

const BookingSystem: React.FC = () => {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const [vehicleInfo, setVehicleInfo] = useState({ year: "", make: "", model: "", engine: "" })
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "" })
  const [locationInfo, setLocationInfo] = useState({ address: "", city: "", zipcode: "", instructions: "" })
  const [dateTime, setDateTime] = useState<Date | null>(null)
  const [selectedService, setSelectedService] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null) // Add error state
  const { toast } = useToast()
  const router = useRouter() // Add router

  useEffect(() => {
    setProgress((step / 5) * 100)
  }, [step])

  const allVehicles = useMemo(() => parseVehicleData(), [])

  const years = useMemo(() => getUniqueValues(allVehicles, "year"), [allVehicles])
  const makes = useMemo(
    () => getUniqueValues(filterVehicles(vehicleInfo.year, "", ""), "make"),
    [vehicleInfo.year, allVehicles],
  )
  const models = useMemo(
    () => getUniqueValues(filterVehicles(vehicleInfo.year, vehicleInfo.make, ""), "model"),
    [vehicleInfo.year, vehicleInfo.make, allVehicles],
  )
  const engines = useMemo(
    () => getUniqueValues(filterVehicles(vehicleInfo.year, vehicleInfo.make, vehicleInfo.model), "engine"),
    [vehicleInfo.year, vehicleInfo.make, vehicleInfo.model, allVehicles],
  )

  const handleVehicleInfoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target
    setVehicleInfo((prev) => {
      const newInfo = { ...prev, [id]: value }
      if (id === "year") newInfo.make = newInfo.model = newInfo.engine = ""
      if (id === "make") newInfo.model = newInfo.engine = ""
      if (id === "model") newInfo.engine = ""
      return newInfo
    })
  }

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value })
  }

  const handleLocationInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocationInfo({ ...locationInfo, [e.target.id]: e.target.value })
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const onSubmit = async (data: AppointmentFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Appointment Scheduled",
          description: "Your appointment has been successfully scheduled.",
        })
        router.push("/fleet-dashboard/appointments")
      } else {
        throw new Error(result.message || "An unexpected error occurred")
      }
    } catch (err) {
      console.error("Booking error:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const completeBooking = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const appointmentData: AppointmentFormData = {
        name: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone,
        service: selectedService,
        date: dateTime?.toISOString().split("T")[0] || "",
        time: dateTime?.toISOString().split("T")[1]?.substring(0, 5) || "",
        vehicleInfo: `${vehicleInfo.year} ${vehicleInfo.make} ${vehicleInfo.model} ${vehicleInfo.engine}`,
        address: locationInfo.address,
        city: locationInfo.city,
        zipcode: locationInfo.zipcode,
        instructions: locationInfo.instructions,
      }

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Booking Confirmed",
          description: "Your appointment has been successfully scheduled.",
        })
        setStep(6) // Move to confirmation step
      } else {
        throw new Error(result.message || "Booking failed")
      }
    } catch (error) {
      console.error("Booking error:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
      toast({
        title: "Booking Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const startOver = () => {
    setStep(1)
    setSelectedService("")
    setVehicleInfo({ year: "", make: "", model: "", engine: "" })
    setContactInfo({ name: "", phone: "", email: "" })
    setLocationInfo({ address: "", city: "", zipcode: "", instructions: "" })
    setDateTime(null)
    setError(null) // Clear error on start over
  }

  return (
    <div className={styles.bookingContainer}>
      <h1>Schedule Your Mobile Oil Change Service</h1>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      </div>

      {error && (
        <div className={styles.error}>
          <p>Error: {error}</p>
        </div>
      )}

      {step === 1 && (
        <div className={styles.step}>
          <h2>Select Service</h2>
          <div className={styles.formGroup}>
            <label htmlFor="service">Service Type</label>
            <select id="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
              <option value="">Select a service</option>
              <option value="full-synthetic">Full Synthetic Oil Change</option>
              <option value="conventional">Conventional Oil Change</option>
              <option value="high-mileage">High Mileage Oil Change</option>
              <option value="diesel">Diesel Oil Change</option>
            </select>
          </div>
          <button onClick={nextStep} disabled={!selectedService}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <h2>Vehicle Information</h2>
          <div className={styles.formGroup}>
            <label htmlFor="year">Vehicle Year</label>
            <select id="year" value={vehicleInfo.year} onChange={handleVehicleInfoChange}>
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="make">Vehicle Make</label>
            <select id="make" value={vehicleInfo.make} onChange={handleVehicleInfoChange} disabled={!vehicleInfo.year}>
              <option value="">Select Make</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="model">Vehicle Model</label>
            <select
              id="model"
              value={vehicleInfo.model}
              onChange={handleVehicleInfoChange}
              disabled={!vehicleInfo.make}
            >
              <option value="">Select Model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="engine">Engine Size</label>
            <select
              id="engine"
              value={vehicleInfo.engine}
              onChange={handleVehicleInfoChange}
              disabled={!vehicleInfo.model}
            >
              <option value="">Select Engine Size</option>
              {engines.map((engine) => (
                <option key={engine} value={engine}>
                  {engine}
                </option>
              ))}
            </select>
          </div>
          <button onClick={nextStep} disabled={!vehicleInfo.engine}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className={styles.step}>
          <h2>Your Contact Details</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={contactInfo.name}
              onChange={handleContactInfoChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={contactInfo.phone}
              onChange={handleContactInfoChange}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              required
              placeholder="Enter your email address"
            />
          </div>
          <button onClick={nextStep}>Next</button>
          <button onClick={prevStep} className={styles.backButton}>
            Back
          </button>
        </div>
      )}

      {step === 4 && (
        <div className={styles.step}>
          <h2>Service Location</h2>
          <div className={styles.formGroup}>
            <label htmlFor="address">Street Address</label>
            <input
              type="text"
              id="address"
              value={locationInfo.address}
              onChange={handleLocationInfoChange}
              required
              placeholder="Enter your street address"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={locationInfo.city}
              onChange={handleLocationInfoChange}
              required
              placeholder="Enter your city"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="zipcode">ZIP Code</label>
            <input
              type="text"
              id="zipcode"
              value={locationInfo.zipcode}
              onChange={handleLocationInfoChange}
              required
              placeholder="Enter your ZIP code"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="instructions">Special Instructions (Optional)</label>
            <textarea
              id="instructions"
              value={locationInfo.instructions}
              onChange={handleLocationInfoChange}
              rows={3}
              placeholder="Enter any special instructions or parking details"
            ></textarea>
          </div>
          <button onClick={nextStep}>Next</button>
          <button onClick={prevStep} className={styles.backButton}>
            Back
          </button>
        </div>
      )}

      {step === 5 && (
        <div className={styles.step}>
          <h2>Select Service Date & Time</h2>
          <div className={styles.formGroup}>
            <label htmlFor="datetime">Preferred Date and Time</label>
            <Flatpickr
              value={dateTime}
              onChange={([date]) => setDateTime(date)}
              options={{
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                minDate: "today",
              }}
              placeholder="Select date and time"
            />
          </div>
          <button onClick={completeBooking} disabled={isLoading}>
            {isLoading ? "Scheduling..." : "Schedule Service"}
          </button>
          <button onClick={prevStep} className={styles.backButton}>
            Back
          </button>
        </div>
      )}

      {step === 6 && (
        <div className={styles.step}>
          <div className={styles.confirmation}>
            <svg className={styles.carIcon} viewBox="0 0 24 24">
              <path
                fill="#4CAF50"
                d="M23,11l-1.5-4.5C21.2,5.6,20.2,5,19,5h-9c-1.2,0-2.2,0.6-2.5,1.5L6,11H1v3h1v7c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-1h12v1c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-7h1v-3H23z M7.1,7.9C7.2,7.4,7.6,7,8,7h8c0.4,0,0.8,0.4,0.9,0.9L18.1,11H5.9L7.1,7.9z M7,14c-0.8,0-1.5-0.7-1.5-1.5S6.2,11,7,11s1.5,0.7,1.5,1.5S7.8,14,7,14z M17,14c-0.8,0-1.5-0.7-1.5-1.5S16.2,11,17,11s1.5,0.7,1.5,1.5S17.8,14,17,14z"
              />
            </svg>
            <h2>Booking Confirmed!</h2>
            <p>Your mobile oil change service has been scheduled.</p>
            <p>We&apos;ll send you a confirmation email with all the details.</p>
            <button onClick={startOver} className={styles.bookAnother}>
              Book Another Service
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingSystem

