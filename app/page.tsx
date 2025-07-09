import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div className='flex items-center justify-center flex-col gap-5'>
      <p>RIDDHISHALA</p>
      <Link href='/login'>Login Here</Link>
    </div>
  )
}
