import React from 'react'

function AdminFeature({ title, description, linkText, link }: { 
  title: string, 
  description: string, 
  linkText: string,
  link: string 
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-green-700 font-medium hover:underline inline-flex items-center">
        {linkText}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default AdminFeature