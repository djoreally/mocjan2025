import BlogPostTemplate, { generateMetadata } from "@/components/BlogPostTemplate"

export const metadata = generateMetadata({
  title: "Mobile Oil Change Services | MOMS Mobile Oil Change",
  content:
    "Explore the range of mobile oil change services offered by MOMS. From synthetic oil changes to fleet maintenance, we've got you covered.",
  date: "2023-06-15",
  author: "MOMS Service Manager",
  slug: "mobile-oil-change-services",
})

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Mobile Oil Change Services | MOMS Mobile Oil Change"
      content={`
        <p>At MOMS Mobile Oil Change, we offer a comprehensive range of mobile oil change services designed to keep your vehicle running smoothly. Our professional technicians bring the service to you, saving you time and hassle.</p>
        <h2>Our Oil Change Services Include:</h2>
        <ul>
          <li><strong>Full Synthetic Oil Change:</strong> Using top-quality synthetic oils for superior engine protection.</li>
          <li><strong>Conventional Oil Change:</strong> A cost-effective option for vehicles that don't require synthetic oil.</li>
          <li><strong>High Mileage Oil Change:</strong> Specially formulated for vehicles with over 75,000 miles.</li>
          <li><strong>Diesel Oil Change:</strong> Specialized service for diesel engines.</li>
          <li><strong>Fleet Maintenance:</strong> Comprehensive services for business fleets of all sizes.</li>
        </ul>
        <h2>Additional Services</h2>
        <p>In addition to oil changes, we also offer:</p>
        <ul>
          <li>Air filter replacement</li>
          <li>Cabin air filter replacement</li>
          <li>Wiper blade replacement</li>
          <li>Battery check and replacement</li>
          <li>Fluid top-offs</li>
        </ul>
        <p>All Our Oil Change Services are performed by certified technicians using high-quality parts and fluids. We're committed to providing convenient, professional service that keeps your vehicle in top condition.</p>
        <p>Book your mobile oil change service today and experience the MOMS difference!</p>
      `}
      date="June 15, 2023"
      author="MOMS Service Manager"
      slug="mobile-oil-change-services"
    />
  )
}

