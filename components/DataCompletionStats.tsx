import React from 'react'

const DataCompletionStats = () => {
  return (
    <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Data Completion Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 size-60 rounded-full shadow-md p-4 flex justify-center items-center"
                >
                  
                </div>
              ))}
            </div>
          </section>
  )
}

export default DataCompletionStats