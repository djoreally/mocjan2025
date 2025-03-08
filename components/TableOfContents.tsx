export default function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  return (
    <nav className="hidden lg:block sticky top-8 ml-8 w-64">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}