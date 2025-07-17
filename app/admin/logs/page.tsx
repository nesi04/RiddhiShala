import UserGrid from '@/components/UserGrid'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <UserGrid/>
      <div className="w-full rounded-full bg-gray-200 flex justify-center items-center py-5">
              <Link href={'/admin/schools'} className="text-2xl font-semibold">
               View All Schools 
              </Link>
            </div>
    </div>
  )
}

export default page