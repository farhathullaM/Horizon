
import { ContactForm } from '@/components/Contact/ContactForm'
import React from 'react'

export const ContactPage = () => {
  return (
    <div className='min-h-screen mx-10 py-10'>
      <h1 className='text-4xl w-full text-center font-bold'>Contact Us</h1>
      <ContactForm />
    </div>
  )
}
