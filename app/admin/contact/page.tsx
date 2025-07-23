import SupportCard from '@/components/landingpage/SupportCard'
import React from 'react'

const page = () => {
  return (
        <section className="py-10 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SupportCard
                title="Technical Support"
                contact="support@meghalayaedu.gov.in"
                description="For login issues or technical problems"
              />
              <SupportCard 
                title="Administrative Queries"
                contact="helpdesk@meghalayaedu.gov.in"
                description="For questions about reporting and procedures"
              />
            </div>
          </div>
        </section>

  )
}

export default page