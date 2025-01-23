export interface VehicleData {
  year: string
  make: string
  model: string
  engine: string
  oilType: string
  oilCapacity: string
}

// This is a simplified dataset. In a real-world scenario, this data would be much more extensive
// and might be fetched from an API or a larger JSON file.
const mockVehicleData: VehicleData[] = [
  // Generate data for years 2000 to 2025
  ...Array.from({ length: 26 }, (_, i) => {
    const year = (2000 + i).toString()
    return [
      // American Manufacturers
      { year, make: "Ford", model: "F-150", engine: "3.5L V6", oilType: "5W-30", oilCapacity: "6.0 quarts" },
      { year, make: "Ford", model: "Mustang", engine: "5.0L V8", oilType: "5W-20", oilCapacity: "8.0 quarts" },
      { year, make: "Ford", model: "Explorer", engine: "3.0L V6", oilType: "5W-30", oilCapacity: "6.0 quarts" },
      { year, make: "Chevrolet", model: "Silverado", engine: "5.3L V8", oilType: "0W-20", oilCapacity: "8.0 quarts" },
      { year, make: "Chevrolet", model: "Camaro", engine: "6.2L V8", oilType: "5W-30", oilCapacity: "8.0 quarts" },
      {
        year,
        make: "Chevrolet",
        model: "Malibu",
        engine: "1.5L 4-cylinder",
        oilType: "0W-20",
        oilCapacity: "5.0 quarts",
      },
      { year, make: "Dodge", model: "Ram 1500", engine: "5.7L V8", oilType: "5W-20", oilCapacity: "7.0 quarts" },
      { year, make: "Dodge", model: "Challenger", engine: "6.4L V8", oilType: "0W-40", oilCapacity: "7.0 quarts" },
      { year, make: "Dodge", model: "Charger", engine: "3.6L V6", oilType: "5W-20", oilCapacity: "6.0 quarts" },
      { year, make: "Jeep", model: "Wrangler", engine: "3.6L V6", oilType: "5W-20", oilCapacity: "5.0 quarts" },
      { year, make: "Jeep", model: "Grand Cherokee", engine: "3.6L V6", oilType: "5W-30", oilCapacity: "6.0 quarts" },
      { year, make: "Jeep", model: "Cherokee", engine: "2.4L 4-cylinder", oilType: "0W-20", oilCapacity: "5.5 quarts" },

      // Japanese Manufacturers
      { year, make: "Toyota", model: "Camry", engine: "2.5L 4-cylinder", oilType: "0W-20", oilCapacity: "4.8 quarts" },
      { year, make: "Toyota", model: "RAV4", engine: "2.5L 4-cylinder", oilType: "0W-20", oilCapacity: "4.8 quarts" },
      {
        year,
        make: "Toyota",
        model: "Corolla",
        engine: "1.8L 4-cylinder",
        oilType: "0W-20",
        oilCapacity: "4.4 quarts",
      },
      { year, make: "Honda", model: "Civic", engine: "2.0L 4-cylinder", oilType: "0W-20", oilCapacity: "3.7 quarts" },
      {
        year,
        make: "Honda",
        model: "CR-V",
        engine: "1.5L 4-cylinder Turbo",
        oilType: "0W-20",
        oilCapacity: "3.7 quarts",
      },
      {
        year,
        make: "Honda",
        model: "Accord",
        engine: "1.5L 4-cylinder Turbo",
        oilType: "0W-20",
        oilCapacity: "3.7 quarts",
      },
      { year, make: "Nissan", model: "Altima", engine: "2.5L 4-cylinder", oilType: "0W-20", oilCapacity: "5.0 quarts" },
      { year, make: "Nissan", model: "Rogue", engine: "2.5L 4-cylinder", oilType: "0W-20", oilCapacity: "5.0 quarts" },
      { year, make: "Nissan", model: "Sentra", engine: "2.0L 4-cylinder", oilType: "0W-20", oilCapacity: "3.8 quarts" },

      // German Manufacturers
      {
        year,
        make: "Volkswagen",
        model: "Jetta",
        engine: "1.4L 4-cylinder Turbo",
        oilType: "5W-40",
        oilCapacity: "5.7 quarts",
      },
      {
        year,
        make: "Volkswagen",
        model: "Tiguan",
        engine: "2.0L 4-cylinder Turbo",
        oilType: "5W-40",
        oilCapacity: "5.7 quarts",
      },
      {
        year,
        make: "Volkswagen",
        model: "Passat",
        engine: "2.0L 4-cylinder Turbo",
        oilType: "5W-40",
        oilCapacity: "5.7 quarts",
      },
      {
        year,
        make: "BMW",
        model: "3 Series",
        engine: "2.0L 4-cylinder Turbo",
        oilType: "5W-30",
        oilCapacity: "5.3 quarts",
      },
      { year, make: "BMW", model: "X5", engine: "3.0L 6-cylinder Turbo", oilType: "5W-30", oilCapacity: "6.9 quarts" },
      {
        year,
        make: "BMW",
        model: "5 Series",
        engine: "2.0L 4-cylinder Turbo",
        oilType: "5W-30",
        oilCapacity: "5.3 quarts",
      },

      // Korean Manufacturers
      {
        year,
        make: "Hyundai",
        model: "Elantra",
        engine: "2.0L 4-cylinder",
        oilType: "5W-30",
        oilCapacity: "4.2 quarts",
      },
      {
        year,
        make: "Hyundai",
        model: "Tucson",
        engine: "2.5L 4-cylinder",
        oilType: "5W-30",
        oilCapacity: "4.8 quarts",
      },
      {
        year,
        make: "Hyundai",
        model: "Sonata",
        engine: "2.5L 4-cylinder",
        oilType: "5W-30",
        oilCapacity: "5.1 quarts",
      },
      { year, make: "Kia", model: "Forte", engine: "2.0L 4-cylinder", oilType: "5W-30", oilCapacity: "4.2 quarts" },
      { year, make: "Kia", model: "Sportage", engine: "2.5L 4-cylinder", oilType: "5W-30", oilCapacity: "4.8 quarts" },
      { year, make: "Kia", model: "Optima", engine: "2.5L 4-cylinder", oilType: "5W-30", oilCapacity: "5.1 quarts" },
    ]
  }).flat(),
]

export function parseVehicleData(): VehicleData[] {
  return mockVehicleData
}

export function getUniqueValues(data: VehicleData[], key: keyof VehicleData): string[] {
  return Array.from(new Set(data.map((item) => item[key])))
    .sort()
    .reverse()
}

export function filterVehicles(year: string, make: string, model: string): VehicleData[] {
  return mockVehicleData.filter(
    (vehicle) =>
      (!year || vehicle.year === year) && (!make || vehicle.make === make) && (!model || vehicle.model === model),
  )
}

