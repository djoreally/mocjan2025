# MOMS Mobile Oil Change

MOMS Mobile Oil Change is a comprehensive web application for a professional mobile oil change and fleet maintenance service. This repository contains the source code for our website, built with Next.js and React.

## Project Overview

This web application serves as a platform for customers to learn about Our Oil Change Services, schedule appointments, and access valuable resources related to vehicle maintenance. It's designed to provide a seamless user experience across devices and incorporates modern web technologies for optimal performance.

## Features

1. **Home Page**: Showcases Our Oil Change Services, customer reviews, and call-to-action elements.
2. **Services Page**: Detailed information about our mobile oil change and fleet maintenance services.
3. **Booking System**: An interactive system for customers to schedule their mobile oil change appointments.
4. **Vehicle Lookup Tool**: A year/make/model dropdown system for users to find the right oil type and capacity for their vehicles.
5. **Blog**: Informative articles about vehicle maintenance and industry insights.
6. **Contact Form**: Allows customers to get in touch with us easily.
7. **Fleet Maintenance Page**: Information and signup for our fleet maintenance services.
8. **FAQ Page**: Comprehensive answers to common questions about Our Oil Change Services.
9. **Responsive Design**: Ensures a great user experience on all device sizes.
10. **SEO Optimization**: Implemented for better search engine visibility.

### Year/Make/Model Dropdown Functionality

The vehicle lookup tool uses a cascading dropdown system:
1. Users first select the year of their vehicle.
2. Based on the selected year, the make dropdown is populated with relevant options.
3. After selecting the make, the model dropdown is updated with corresponding models.
4. Finally, users can select the specific engine for their vehicle.
5. Upon selection, the system displays the recommended oil type and capacity for the selected vehicle.

This feature uses data from `utils/vehicleData.ts` and is implemented in `app/motor-oil-lookup/MotorOilLookup.tsx`.

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- Segment Analytics
- Vercel for deployment

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

