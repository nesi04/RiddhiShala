import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-gray-800 text-gray-300 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Government of Meghalaya - Education Department
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-white">User Guide</a>
              <a href="#" className="text-sm hover:text-white">FAQs</a>
              <a href="#" className="text-sm hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
  )
}

export default Footer