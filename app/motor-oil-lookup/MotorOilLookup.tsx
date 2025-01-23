"use client"

import React, { useState, useMemo } from "react"
import { parseVehicleData, getUniqueValues, filterVehicles } from "@/utils/vehicleData"

const MotorOilLookup = () => {
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedEngine, setSelectedEngine] = useState("")
  const [oilInfo, setOilInfo] = useState<{ oilType: string; oilCapacity: string } | null>(null)

  const allVehicles = useMemo(() => parseVehicleData(), [])

  const years = useMemo(() => getUniqueValues(allVehicles, "year"), [allVehicles])
  const makes = useMemo(
    () => getUniqueValues(filterVehicles(selectedYear, "", ""), "make"),
    [selectedYear, allVehicles],
  )
  const models = useMemo(
    () => getUniqueValues(filterVehicles(selectedYear, selectedMake, ""), "model"),
    [selectedYear, selectedMake, allVehicles],
  )
  const engines = useMemo(
    () => getUniqueValues(filterVehicles(selectedYear, selectedMake, selectedModel), "engine"),
    [selectedYear, selectedMake, selectedModel, allVehicles],
  )

  const fetchOilInfo = () => {
    const vehicle = filterVehicles(selectedYear, selectedMake, selectedModel).find((v) => v.engine === selectedEngine)
    setOilInfo(vehicle ? { oilType: vehicle.oilType, oilCapacity: vehicle.oilCapacity } : null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Motor Oil Lookup Tool</h1>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            Select Year:
            <select
              className="border rounded p-2 w-full mt-1"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value)
                setSelectedMake("")
                setSelectedModel("")
                setSelectedEngine("")
                setOilInfo(null)
              }}
            >
              <option value="">-- Select Year --</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            Select Make:
            <select
              className="border rounded p-2 w-full mt-1"
              value={selectedMake}
              onChange={(e) => {
                setSelectedMake(e.target.value)
                setSelectedModel("")
                setSelectedEngine("")
                setOilInfo(null)
              }}
              disabled={!selectedYear}
            >
              <option value="">-- Select Make --</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            Select Model:
            <select
              className="border rounded p-2 w-full mt-1"
              value={selectedModel}
              onChange={(e) => {
                setSelectedModel(e.target.value)
                setSelectedEngine("")
                setOilInfo(null)
              }}
              disabled={!selectedMake}
            >
              <option value="">-- Select Model --</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            Select Engine:
            <select
              className="border rounded p-2 w-full mt-1"
              value={selectedEngine}
              onChange={(e) => {
                setSelectedEngine(e.target.value)
                setOilInfo(null)
              }}
              disabled={!selectedModel}
            >
              <option value="">-- Select Engine --</option>
              {engines.map((engine) => (
                <option key={engine} value={engine}>
                  {engine}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mt-6 hover:bg-blue-700 transition-colors"
          onClick={fetchOilInfo}
          disabled={!selectedEngine}
        >
          Get Oil Information
        </button>

        {oilInfo && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-bold mb-2">Oil Information</h2>
            <p>
              <strong>Oil Type:</strong> {oilInfo.oilType || "N/A"}
            </p>
            <p>
              <strong>Oil Capacity:</strong> {oilInfo.oilCapacity || "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MotorOilLookup

