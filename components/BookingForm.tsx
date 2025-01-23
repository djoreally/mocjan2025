"use client"

import { useState } from "react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Book An Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-black border border-gray-800 p-3 rounded-lg w-full focus:outline-none focus:border-[#2563eb]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="bg-black border border-gray-800 p-3 rounded-lg w-full focus:outline-none focus:border-[#2563eb]"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black border border-gray-800 p-3 rounded-lg w-full focus:outline-none focus:border-[#2563eb]"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="bg-black border border-gray-800 p-3 rounded-lg w-full focus:outline-none focus:border-[#2563eb]"
          />
        </div>
        <textarea
          name="message"
          placeholder="Type here..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-black border border-gray-800 p-3 rounded-lg w-full focus:outline-none focus:border-[#2563eb]"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#2563eb] text-white px-8 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}

