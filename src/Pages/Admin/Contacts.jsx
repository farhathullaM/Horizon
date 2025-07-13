import ContactTable from '@/components/Tables/ContactTable'
import React from 'react'

const Contacts = () => {
  return (
       <div>
      <h1 className="text-3xl font-bold text-[#1E4765] p-4">Contacts</h1>
      <ContactTable />
    </div>
  )
}

export default Contacts