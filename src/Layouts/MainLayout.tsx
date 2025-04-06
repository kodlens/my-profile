import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayout( {children}:{children:React.ReactNode}) {
  return (
    <>
        <Navbar />

        <main className='max-w-5xl m-auto'>
          {children}
        </main>
       
    </>
  )
}
