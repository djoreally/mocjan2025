"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#2563eb]"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#2563eb]"
            required
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#2563eb]"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#2563eb]"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

