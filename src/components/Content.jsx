// ./components/Content.js
import React from 'react'

export default function Content() {
  return (
    <main className="flex-grow p-6">
      <section className="bg-gray-100 dark:bg-gray-800 rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">Main Content</h2>
        <p>This is the main content of the application.</p>
      </section>
    </main>
  )
}
