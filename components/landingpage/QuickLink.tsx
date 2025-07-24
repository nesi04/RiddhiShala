import React from 'react'

function QuickLink({ title, icon }: { title: string, icon: string }) {
  return (
    <div className="bg-white/20 hover:bg-white/30 p-4 rounded-md transition cursor-pointer flex flex-col items-center">
      <span className="text-2xl mb-2">{icon}</span>
      <p className="font-medium">{title}</p>
    </div>
  );
}

export default QuickLink
