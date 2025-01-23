"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does mobile oil change service work?",
    answer:
      "Our mobile oil change service brings the auto shop to you. We come to your home, office, or any convenient location with our fully-equipped service van. Our certified technicians perform the oil change on-site, saving you time and hassle.",
  },
  {
    question: "What types of oil do you offer?",
    answer:
      "We offer both conventional and full synthetic oil options. Our technicians can recommend the best type of oil for your vehicle based on the manufacturer's specifications and your driving habits.",
  },
  {
    question: "How long does a mobile oil change take?",
    answer:
      "A typical oil change service takes about 30-45 minutes. However, this can vary depending on the vehicle and any additional services requested.",
  },
  {
    question: "Do you service all types of vehicles?",
    answer:
      "We service most passenger vehicles, including cars, SUVs, and light trucks. For specialized vehicles or heavy-duty trucks, please contact us to discuss your specific needs.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and mobile payment options like Apple Pay and Google Pay. We also offer invoicing options for our fleet maintenance customers.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Check Our FAQ Page For More</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

