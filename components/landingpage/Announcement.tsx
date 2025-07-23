import React from 'react'


function Announcement({ title, date, description }: { 
  title: string, 
  date: string,
  description: string 
}) {
  return (
    <div className="bg-white p-4 rounded-lg border-l-4 border-green-600 shadow-sm">
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{date}</span>
      </div>
      <p className="text-gray-700 mt-2 text-sm">{description}</p>
    </div>
  );
}


export default Announcement