
import { SidebarDemo } from '@/components/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

export default function AdminLayout({
    children,
}:{children:React.ReactNode}) {
  return (
   
     <SidebarProvider>
        <SidebarDemo></SidebarDemo>
      <main>
        
        {children}
      </main>
      </SidebarProvider> 
    
  )
}
