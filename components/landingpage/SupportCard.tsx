import React from 'react'

function SupportCard({ title, contact, description }: { 
  title: string, 
  contact: string,
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="flex items-center mt-4">
        <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a href={`mailto:${contact}`} className="text-green-700 hover:underline">{contact}</a>
      </div>
    </div>
  );
}

export default SupportCard